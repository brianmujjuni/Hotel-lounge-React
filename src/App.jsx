import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Button from "./ui/Button";

const StyledApp = styled.div`
  background-color: yellow;
  padding: 20px;
`;
export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Button>Sex</Button>
        <Button>Condoms</Button>
        <Input type="tel"></Input>
      </StyledApp>
    </>
  );
}
