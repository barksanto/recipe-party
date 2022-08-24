import {FaPizzaSlice, FaHamburger,FaUmbrellaBeach} from "react-icons/fa"
import { GiNoodles } from "react-icons/gi"; 
import { SiAlfred } from "react-icons/si"
import styled from "styled-components";
import { NavLink } from "react-router-dom"; // using NavLink instead of Link because there is a class called active available


function Category() {
  return (
    <ButtonsContainerList>
      <SLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink >
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/German"}>
        <SiAlfred />
        <h4>German</h4>
      </SLink >
       <SLink to={"/cuisine/Caribbean"}>
        <FaUmbrellaBeach />
        <h4>Caribbean</h4>
      </SLink >
    </ButtonsContainerList>
  )
}

const ButtonsContainerList = styled.div`
display:flex;
/* flex-direction: row; */
justify-content: space-around;
margin: 2rem 0rem;
`

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 8px;
/* margin-right: 2rem; */
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
min-width: 5rem;
height: 6rem;
cursor: pointer;
transform: scale(0.7);

h4{
  color: white;
  font-size: .8rem;
}

svg{
  color: white;
  font-size: 1.5rem;
}

&.active{
  background: linear-gradient(to right, #adeee3, #63b995);
  opacity: 1.2;
  border: 1px solid black;

  h4{
    color: #313131;
  }

  svg{
    color: #313131;
  }
}
`


export default Category