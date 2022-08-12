import Pages from "./pages/Pages"
import styled from "styled-components"

function App() {
  return (
    <BodyStyle>
      <div className="App">
        <h1>Hello from App component</h1>
        <Pages />
      </div>
    </BodyStyle>
  )
}

export default App

const BodyStyle = styled.div`
  background-color: #e1f2fe;
  margin: 0 auto;
  height: 100vh;
`
