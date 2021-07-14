import React from 'react'

//Style
import './Form.scss'

//Images
import Magnifier from '../assets/images/magnifier.svg'

const Form = ({ inputSearch, handleChange, handleSubmit }: IForm) => (
  <form id="form" onSubmit={handleSubmit}>
    <input id="city" name="city" value={inputSearch} onChange={handleChange} autoFocus={true} placeholder="search" />
    <button type="submit">
      <img src={Magnifier} alt="magnifier" />
    </button>
  </form>
)

interface IForm {
  inputSearch: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default Form
