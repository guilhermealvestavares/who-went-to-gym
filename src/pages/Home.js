import { Register, Ranking, CardInfos } from "../components";
import { Wrapper, Title, Description, WrapperCards } from "../App.style";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseUtils";
import Container from "react-bootstrap/Container";

export const Home = () => {
  const [rankingInfos, setRankingInfos] = useState();
  const [rankingInfo, setRankingInfo] = useState([]);

  useEffect(() => {
    const getDocumentInfos = async () => {
      const responsePersons = await getDocs(collection(db, "rankings"));
      setRankingInfos(responsePersons);
    };
    getDocumentInfos();
  }, []);

  useEffect(() => {
    rankingInfos?.forEach((doc) => {
      setRankingInfo((rankingInfo) => [...rankingInfo, doc.data()]);
    });
  }, [rankingInfos]);

  useEffect(() => {
    console.log(rankingInfo);
    console.log(rankingInfos);
  }, [rankingInfo, rankingInfos]);

  return (
    <Container>
      <Wrapper>
        <div>
          <Title>Comece já a competir!</Title>
          <Description>
            Clique em entrar para participar de rankings
          </Description>
        </div>
        <WrapperCards>
          {rankingInfo &&
            rankingInfo.map((infos) => <CardInfos infos={infos} />)}
        </WrapperCards>
      </Wrapper>
    </Container>
  );
};
