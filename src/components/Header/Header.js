import React from "react";

import styled from "styled-components";
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  font-family: "Helvetica";
`;

function Header() {
  return (
    <header>
      <Title>Dictionary-app</Title>
    </header>
  );
}

export default Header;
