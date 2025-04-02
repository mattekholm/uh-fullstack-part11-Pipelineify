const ContactForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          <p>
            name: <input value={props.newName} onChange={props.handleNameInputChange}/>
          </p>
          <p>
            phone: <input value={props.newPhone} onChange={props.handlePhoneInputChange} />
          </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm