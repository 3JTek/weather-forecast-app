import React from 'react'

const Form = ({ inputSearch, handleChange, handleSubmit }: IForm) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="city">City</label>
    <input id="city" name="city" value={inputSearch} onChange={handleChange} autoFocus={true} />
    <button>Search</button>
  </form>
)

interface IForm {
  inputSearch: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default Form
