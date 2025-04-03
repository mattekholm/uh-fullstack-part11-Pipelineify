const Filter = ({ handleFilterChange }) => {
  return (
    <div>
      <p>Filter on name: <input onChange={handleFilterChange} /></p>
    </div>
  )
}

export default Filter