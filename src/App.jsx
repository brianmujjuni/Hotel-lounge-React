import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;
export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Heading as="h1">Automex</Heading>
          <div>
            <Button variation="primary" size="medium">
              Sex
            </Button>
            <Button variation="secondary" size="medium">
              Condoms
            </Button>
            <Input type="tel"></Input>
          </div>
        </Row>
      </StyledApp>
    </>
  );
}
