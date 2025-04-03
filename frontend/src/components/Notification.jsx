const Notification = ({message}) => {
  const divStyle = {
    background: '#62d305', 
    margin: '20px',
    padding: '5px 20px',
    maxWidth: '300px',
    borderRadius: '8px' 
  }

  const pStyle = {
    color: 'white',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontStyle: 'italic',
    textAlign: 'center'
  }

  if (message === null) {
    return null
  }
  
  return (
    <div style={divStyle}>
      <p style={pStyle}>{message}</p>
    </div>
  )
}

export default Notification