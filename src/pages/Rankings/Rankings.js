import Container from "react-bootstrap/Container";
import { Wrapper } from "./pages.style";
import { RankingCards } from "../components";

export const Rankings = () => {
  return (
    <Container>
      <Wrapper>
        <p>página de rankings</p>
        <RankingCards />
      </Wrapper>
    </Container>
  );
};
