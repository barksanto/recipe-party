import React from 'react'
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyle>
      <span>Built by Barkley Santo. <a href='https://barkleysanto.com'>barkleysanto.com</a> &copy;</span>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export default Footer