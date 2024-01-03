import { CardInfos } from "../components";
import {
  Wrapper,
  Title,
  Description,
  WrapperCards,
  NonLoggedFrame,
  StartButton,
} from "../App.style";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebaseUtils";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseUtils";
import { doc, setDoc } from "firebase/firestore";

export const Home = () => {
  const { isLogged, userInfos, setUserInfos, setIsLogged } =
    useContext(UserContext);
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

  const handlerGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        localStorage.setItem("userInfos", JSON.stringify(result?.user));
        localStorage.setItem("isLogged", true);
        setIsLogged(true);
        setUserInfos(JSON.stringify(result?.user));

        const { email, displayName, photoURL } = userInfos;

        await setDoc(
          doc(db, "users", userInfos.email),
          {
            email,
            displayName,
            photoURL,
          },
          { merge: true }
        );
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
  };

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
      {!isLogged && (
        <NonLoggedFrame>
          <Title>Inicie um desafio de academia em segundos </Title>
          <Description>
            Crie um grupo e comece a competir com os seus amigos!
          </Description>
          <StartButton onClick={handlerGoogleLogin}>Começar</StartButton>
        </NonLoggedFrame>
      )}
    </Container>
  );
};
