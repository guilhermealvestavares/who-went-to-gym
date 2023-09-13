import {
  Wrapper,
  ApplicationName,
  WrapperItem,
  LogoutButton,
} from "./Header.style";
import Container from "react-bootstrap/Container";
import { auth } from "../../firebaseUtils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import GoogleButton from "react-google-button";

export const Header = () => {
  const { isLogged, setIsLogged, userInfos, setUserInfos } =
    useContext(UserContext);

  const purgeUserStorage = () => {
    localStorage.clear();
    setIsLogged(false);
    console.log("purge");
  };

  const handlerGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("userInfos", result?.user);
        localStorage.setItem("isLogged", true);
        setIsLogged(true);
        setUserInfos(result?.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Wrapper>
      <Container>
        <WrapperItem>
          {isLogged ? (
            <>
              <img alt="Foto do perfil" src={userInfos?.photoURL} />
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
