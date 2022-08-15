import Veggie from "../components/Veggie"
import Popular from "../components/Popular"
import styled from "styled-components";

function Home() {
  return (
    <ContainerDiv>
      <Veggie />
      <Popular/>
    </ContainerDiv>
  )
}

const ContainerDiv = styled.div`
/* height: 100%; */
`

export default Home