import { Title } from "./pages.style";
import { Register } from "../components";
import Container from "react-bootstrap/Container";

export const NewRegister = () => {
  return (
    <Container>
      <Title>Registrar um novo treino</Title>
      <Register />
    </Container>
  );
};
