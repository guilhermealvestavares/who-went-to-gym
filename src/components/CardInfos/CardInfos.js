import {
  Wrapper,
  Title,
  Description,
  TitleInfos,
  Badge,
  JoinButton,
} from "./CardInfos.style";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import { useNavigate } from "react-router-dom";

export const CardInfos = ({ infos, user }) => {
  const navigate = useNavigate();
  const { name, participants, sports, id } = infos;
  const { email } = user;

  const goToPageRanking = () => {
    navigate(`/who-went-to-gym/rankings/${id}`);
  };

  const findParticipantInGroup = (user) => {
    return user === email;
  };

  const joinInGroup = async () => {
    await updateDoc(doc(db, "rankings", id), {
      participants: [...participants, email],
    });
    goToPageRanking();
  };

  return (
    <Wrapper>
      <TitleInfos>
        <div>
          <Title>{name}</Title>
          <Description>{participants.length} participantes</Description>
        </div>
        <Badge>{`${sports[0]}${
          sports.length > 1 ? " +" + (sports.length - 1) : ""
        }`}</Badge>
      </TitleInfos>
      {participants.find(findParticipantInGroup) && (
        <JoinButton onClick={goToPageRanking}>Acessar</JoinButton>
      )}
      {!participants.find(findParticipantInGroup) && (
        <JoinButton onClick={joinInGroup}>Entrar</JoinButton>
      )}
    </Wrapper>
  );
};
