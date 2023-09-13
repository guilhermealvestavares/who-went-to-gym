import { Register, Ranking } from "../components";
import { Wrapper, Title, Description } from "../App.style";

export const Home = () => {
  return (
    <Wrapper>
      <div>
        <Title>Foto de agora (academia) 2023</Title>
        <Description>
          Competição entre amigos para motivar ir à academia
        </Description>
      </div>
      <Register />
      <Ranking />
    </Wrapper>
  );
};
