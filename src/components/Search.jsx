import styled from "styled-components";
import { useState } from "react"; 
import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom"


function Search() {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/searched/`+input)
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div className="logo-title">
        <Link to={"/"}>
        RecipeParty
        </Link>
      </div>
      <div >
        <FaSearch ></FaSearch>
        <input onChange={(e) => setInput(e.target.value) } type="text" value={input } placeholder="Search... 🧐"/>
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  
  .logo-title{
    font-size: 2rem;
    text-align: center;
  }

  div{
    width: 100%;
    position: relative; 
    text-align: center;
  }

input{
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  color: white;
}

svg{
  position: relative;
  top: 50%;
  left: 30%;
  transform: translate(100%, -50%);
  color: white;
}
`


export default Search