import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import Container from "react-bootstrap/Container";
import {
  BoxInfos,
  Title,
  LabelInfos,
  Infos,
  Badge,
  WrapperBadge,
  List,
  ListItem,
  BadgePosition,
} from "./RankingInfos.style";

export const RankingInfos = () => {
  const [rankingInfos, setRankingInfos] = useState();
  const [userWorkoutsInfos, setUserWorkoutsInfos] = useState([]);
  const { id } = useParams();

  let userWorkoutsInfo = [];
  console.log("let", userWorkoutsInfo);

  useEffect(() => {
    const getRankingInfos = async () => {
      const docRef = doc(db, "rankings", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setRankingInfos(docSnap.data());
      }
    };
    getRankingInfos();
  }, [id]);

  useEffect(() => {
    const getUserWorkoutInfos = async () => {
      if (rankingInfos?.participants) {
        const userWorkoutsInfoPromises = rankingInfos.participants.map(
          async (participant) => {
            const docRef = doc(db, "users", participant);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              return docSnap.data();
            }
            return null;
          }
        );

        const userWorkoutsInfo = await Promise.all(userWorkoutsInfoPromises);
        setUserWorkoutsInfos(userWorkoutsInfo.filter((info) => info !== null));
      }
    };

    getUserWorkoutInfos();
  }, [rankingInfos]);

  return (
    <Container>
      {rankingInfos && <Title>{rankingInfos?.name}</Title>}
      {rankingInfos && (
        <>
          <BoxInfos>
            <LabelInfos>
              Criado por: <Infos>{rankingInfos?.creator?.name}</Infos>
            </LabelInfos>

            <LabelInfos>
              Válido até: <Infos>{rankingInfos.finalDate}</Infos>
            </LabelInfos>

            <LabelInfos>
              Quantidade de participantes:
              <Infos>
                {` ${rankingInfos?.participants?.length} participantes`}
              </Infos>
            </LabelInfos>
            <LabelInfos>
              Esportes válidos:
              <WrapperBadge>
                {rankingInfos?.sports.map((sport) => (
                  <Badge>{sport}</Badge>
                ))}
              </WrapperBadge>
            </LabelInfos>
          </BoxInfos>
        </>
      )}
      <List>
        {console.log(userWorkoutsInfos)}
        {userWorkoutsInfos &&
          userWorkoutsInfos
            ?.sort((prev, next) => next?.times - prev?.times)
            .map((item, index) => (
              <ListItem key={`${index}-list-items`}>
                <BadgePosition>{index + 1}</BadgePosition>
                <span>{item.displayName}</span>

                <span>
                  {item.times ? item.times : 0}{" "}
                  {item.times === 1 ? "treino" : "treinos"}
                </span>
              </ListItem>
            ))}
      </List>
    </Container>
  );
};
