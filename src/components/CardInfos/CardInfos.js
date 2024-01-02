import {
  Wrapper,
  Title,
  Description,
  TitleInfos,
  Badge,
  JoinButton,
} from "./CardInfos.style";
import { useNavigate } from "react-router-dom";

export const CardInfos = ({ infos }) => {
  const navigate = useNavigate();
  const { name, participants, sports, id } = infos;

  const goToPageRanking = () => {
    navigate(`/rankings/${id}`);
  };

  return (
    <Wrapper>
      <TitleInfos>
        <div>
          <Title>{name}</Title>
          <Description>{participants.length} participantes</Description>
        </div>
        <Badge>{sports[0]}</Badge>
      </TitleInfos>
      <JoinButton onClick={goToPageRanking}>Entrar</JoinButton>
    </Wrapper>
  );
};
