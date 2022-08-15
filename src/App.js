import Pages from "./pages/Pages"
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <BodyStyle>
        <Pages />
      </BodyStyle>
    </div>
  )
}

export default App

const BodyStyle = styled.div`
  margin: 0 auto;
`
