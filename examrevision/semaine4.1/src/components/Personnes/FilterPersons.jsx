const FilterPersons = ({ filter, setFilter }) => <p>filter shown name with <input value={filter} onChange={e => setFilter(e.target.value)}></input></p>

export default FilterPersons;