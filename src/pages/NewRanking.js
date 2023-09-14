import { Wrapper, Title, Description } from "../App.style";
import { NewRanking as New } from "../components";

export const NewRanking = () => {
  return (
    <Wrapper>
      <div>
        <Title>Criar novo ranking</Title>
        <Description>
          Escolha as opções e regras do seu novo ranking!
        </Description>
        <New />
      </div>
    </Wrapper>
  );
};
