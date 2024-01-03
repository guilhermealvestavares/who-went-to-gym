import { CardInfos } from "../components";
import { Wrapper, Title, Description, WrapperCards } from "../App.style";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseUtils";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Home = () => {
  const { isLogged, userInfos } = useContext(UserContext);
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

  return (
    <Container>
      {isLogged && (
        <Wrapper>
          <div>
            <Title>Comece já a competir!</Title>
            <Description>
              Clique em entrar para participar de rankings
            </Description>
          </div>
          <WrapperCards>
            {rankingInfo &&
              rankingInfo.map((infos) => (
                <CardInfos infos={infos} user={userInfos} />
              ))}
          </WrapperCards>
        </Wrapper>
      )}
    </Container>
  );
};
