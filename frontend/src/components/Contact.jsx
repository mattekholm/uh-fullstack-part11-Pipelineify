import Button from "./Button"

const Contact = ({person, onDeleteContact}) => {
  return (
    <div>
      <p>
        {person.name}: {person.number} <Button onClick={onDeleteContact} label='delete' />
      </p> 
    </div>
  )
}

export default Contact