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
import { Link } from "react-router-dom";

export const Header = () => {
  const { isLogged, setIsLogged, userInfos, setUserInfos } =
    useContext(UserContext);

  const purgeUserStorage = () => {
    localStorage.clear();
    setIsLogged(false);
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
          },
          { merge: true }
        );
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Wrapper>
        <Container>
          <WrapperItem>
            {isLogged ? (
              <>
                <MenuWrapper>
                  <MenuItem>
                    <Link to="/who-went-to-gym">Início</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/who-went-to-gym/novo-ranking">Novo Ranking</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/who-went-to-gym/registrar-treino">
                      Registrar treino
                    </Link>
                  </MenuItem>
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
    </>
  );
};
