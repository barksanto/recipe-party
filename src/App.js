import Pages from "./pages/Pages"
import styled from "styled-components"
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BodyStyle>
        <BrowserRouter>
          <Category />
          <Pages />
        </BrowserRouter>
      </BodyStyle>
    </div>
  )
}

export default App

const BodyStyle = styled.div`
  /* margin: 0 auto; */
`
