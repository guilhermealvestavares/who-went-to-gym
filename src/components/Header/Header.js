import { useContext } from "react";
import {
  Wrapper,
  ApplicationName,
  WrapperItem,
  LogoutButton,
  MenuWrapper,
  MenuItem,
} from "./Header.style";
import Container from "react-bootstrap/Container";
import { auth } from "../../firebaseUtils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserContext } from "../../contexts/UserContext";
import GoogleButton from "react-google-button";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { isLogged, setIsLogged, userInfos, setUserInfos } =
    useContext(UserContext);

  const navigate = useNavigate();

  const purgeUserStorage = () => {
    localStorage.clear();
    setIsLogged(false);
    console.log("purge");
  };

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
            groups: [],
            times: 0,
            workoutInfos: [],
          },
          { merge: true }
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <Container>
        <WrapperItem>
          {isLogged ? (
            <>
              <MenuWrapper>
                <MenuItem>Início</MenuItem>
                <MenuItem>Novo Ranking</MenuItem>
              </MenuWrapper>
              <LogoutButton onClick={purgeUserStorage}>Logout</LogoutButton>
            </>
          ) : (
            <>
              <ApplicationName>Gymgram</ApplicationName>
              <GoogleButton
                onClick={handlerGoogleLogin}
                label="Entrar com o Google"
              />
            </>
          )}
        </WrapperItem>
      </Container>
    </Wrapper>
  );
};
