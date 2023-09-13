import Container from "react-bootstrap/Container";
import { Login as LoginCard } from "../components";
import { Wrapper } from "./pages.style";

export const Login = () => {
  return (
    <Container>
      <Wrapper>
        <LoginCard />
      </Wrapper>
    </Container>
  );
};
