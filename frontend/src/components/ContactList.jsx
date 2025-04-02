import Contact from './Contact'

const ContactList = ({personList, onDeleteContact}) => {
  return (
    <div>
      {personList.map((person) =>
        <Contact 
          key={person.id} 
          person={person} 
          onDeleteContact={() => onDeleteContact(person.id)}/>
      )}
    </div>
  )
}

export default ContactList