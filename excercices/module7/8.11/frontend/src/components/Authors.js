import { useMutation, useQuery } from "@apollo/client"
import { ALL_AUTHORS, set_BiRTHYEAR } from "../graphql"
import { useState } from "react"
import { Select } from 'antd';


const Authors = (props) => {
  const [birthdate, setBirthdate] = useState('')
  const [name, setName] = useState('')
  const result = useQuery(ALL_AUTHORS)
  const [editAuthor] = useMutation(set_BiRTHYEAR, { refetchQueries: [{ query: ALL_AUTHORS }] })

  const submit = async (event) => {
    event.preventDefault()
    editAuthor({ variables: { name, setBornTo: parseInt(birthdate) } })
    setBirthdate('')
    setName('')

  }


  if (result.loading) {
    return <div>loading...</div>
  }
  const onChange = (value) => {
    console.log(`selected ${value}`);
    setName(value)
  };


  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const options = [];
  const authors = result

  authors.data.allAuthors.map((author) => {
    options.push({
      label: author.name,
      value: author.name,
    });
  });

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {result.data.allAuthors.map(a => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={submit}>
        <div>
          Name
          <Select id="select"
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={filterOption}
            options={options}
          />

        </div>
        <div>
          Birthday
          <input type="text" value={birthdate} onChange={({ target }) => setBirthdate(target.value)} />s
        </div>
        <button type="submit">Submit</button>

      </form>
    </div>
  )


}


export default Authors
