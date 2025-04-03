import { useState, useEffect } from 'react'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'


const App = () =>  {
  const [persons, setPersons] = useState([])  
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newSearchString, setNewSearchString] = useState('')
  const [notification, setNotification] = useState(null)

  // Fetch persons from server
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  // Update name input field on change
  const handleNameInputChange = (event) => {
    setNewName(event.target.value)    
  }

  // Update phone input field on change
  const handlePhoneInputChange = (event) => {
    setNewPhone(event.target.value)
  }

  // Update filter boolean
  const handleFilterChange = (event) => {
    setShowAll(event.target.value === '')
    setNewSearchString(event.target.value)
  }

  // Filter contacts to show (if filter is applied)
  const contactsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newSearchString))


  // Handle 'Add' click by either creating new contact or updating existing
  const handleAddButton = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())    
    existingPerson ? updateContact(existingPerson.id) : addContact()
  }


  // Update existing contact 
  const updateContact = (id) => {
    const personObject = {
      name: newName,
      number: newPhone,
    }

    personService
      .update(id, personObject)
      .then(() => {
        setPersons(origPersons => origPersons.map(p => (p.id === id ? { ...p, ...personObject } : p)))
        setNewName('')
        setNewPhone('')
        setNotification('Updated contact')
        setTimeout(() => {
          setNotification(null)
        }, 3000);
      })
      .catch(error => {
        setNotification(error.response.data.error)
        setTimeout(() => {
          setNotification(null)
        }, 5000);
      })
  }



  // Add name to list
  const addContact = () => {
    const personObject = {
      name: newName,
      number: newPhone
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhone('')
        setNotification(`${returnedPerson.name} was added to Contacts`)
        setTimeout(() => {
          setNotification(null)
        }, 3000);
      })
      .catch(error => {
        setNotification(error.response.data.error)
        setTimeout(() => {
          setNotification(null)
        }, 5000);
      })
  }

  // Delete contact
  const deleteContact = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    if (confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons((origPersons) => {
            return origPersons.filter(p => p.id !== id)
          })
          setNotification(`Contact ${personToDelete.name} deleted successfully.`);
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        })
        .catch(error => {
          console.log(`An unexpected error happened: ${error}`);
        })
    }
  }

  return (
    <div>
      <h1>PHONEBOOK</h1>
      
      <hr />
      
      <h2>add a new contact</h2>
      <Notification message={notification}/>
      <ContactForm 
        onSubmit={handleAddButton}
        newName={newName}
        handleNameInputChange={handleNameInputChange}
        newPhone={newPhone}
        handlePhoneInputChange={handlePhoneInputChange}
        />

      <hr />

      <h2>contacts</h2>      
      <Filter handleFilterChange={handleFilterChange}/>

      <br />

      <ContactList 
        personList={contactsToShow} 
        onDeleteContact={deleteContact}
        />

    </div>
  )
}

export default App
