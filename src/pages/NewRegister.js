import { Title } from "./pages.style";
import { Register } from "../components";
import Container from "react-bootstrap/Container";
import { Description } from "../App.style";

export const NewRegister = () => {
  return (
    <Container>
      <Title>Registrar um novo treino</Title>
      <Description>
        Faça o seu checkin aqui. Basta selecionar o esporte praticado e clicar
        em Registrar Treino!
      </Description>
      <Register />
    </Container>
  );
};
