import styled from "styled-components";

const primaryColor = "#94928e"; //Потому что styled-components не поддерживает на прямую scss
const textColor = "#fff";

const Button = styled.button`
  width: 80%;
  background: ${primaryColor};
  color: ${textColor};
  border: none;
  padding: 0.55rem;
  cursor: pointer;

  @media (min-width: 700px) {
  width: auto
  }
  
`;

export default Button;
