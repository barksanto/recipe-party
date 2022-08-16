import styled from "styled-components";
// import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <FormStyle>
      <div className="logo-title">
        RecipeParty
      </div>
      <div>
        <FaSearch ></FaSearch>
        <input type="text"/>
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  
  .logo-title{
    font-size: 2rem;
    align-self: center;
  }

  div{
    width: 100%;
    position: relative; 
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
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(100%, -50%);
  color: white;
}
`


export default Search