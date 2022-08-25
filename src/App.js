import Pages from "./pages/Pages"
import styled from "styled-components"
import Category from "./components/Category"
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <BodyStyle>
        <BrowserRouter>
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
        <Footer />
      </BodyStyle>
    </div>
  )
}

export default App

const BodyStyle = styled.div`
  /* margin: 0 auto; */
`
