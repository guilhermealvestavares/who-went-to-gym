import Container from "react-bootstrap/Container";
import { Wrapper } from "./pages.style";

export const MyProfile = () => {
  return (
    <Container>
      <Wrapper>
        <p>página de perfil</p>
        {alert("página de perfil")}
      </Wrapper>
    </Container>
  );
};
