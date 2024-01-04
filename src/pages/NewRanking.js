import { Wrapper, Title, Description } from "../App.style";
import { NewRanking as New } from "../components";

export const NewRanking = () => {
  return (
    <Wrapper>
      <div style={{ width: "100%;" }}>
        <Title>Criar novo ranking</Title>
        <Description>
          Para começar, crie um grupo, escolha uma modalidade e compartilhe com
          seus amigos
        </Description>
        <New />
      </div>
    </Wrapper>
  );
};
