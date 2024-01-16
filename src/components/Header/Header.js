import { useContext, useState, useEffect } from "react";
import {
  Wrapper,
  ApplicationName,
  WrapperItem,
  LogoutButton,
  MenuWrapper,
  MenuItem,
  Avatar,
  MenuItemMobile,
  OffCanvasStyled,
} from "./Header.style";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { auth } from "../../firebaseUtils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserContext } from "../../contexts/UserContext";
import GoogleButton from "react-google-button";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isLogged, setIsLogged, setUserInfos, userInfos } =
    useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Adiciona um event listener para mudanças no tamanho da janela
      window.addEventListener("resize", handleResize);

      // Remove o event listener ao desmontar
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
  };

  const purgeUserStorage = () => {
    localStorage.clear();
    setIsLogged(false);
  };

  const handlerGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("userInfos", JSON.stringify(result?.user));
      localStorage.setItem("isLogged", true);
      setIsLogged(true);
      setUserInfos(JSON.stringify(result?.user));

      const { email, displayName, photoURL } = result?.user;

      await setDoc(
        doc(db, "users", email),
        {
          email,
          displayName,
          photoURL,
        },
        { merge: true }
      );

      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  const isMobile = useIsMobile();

  return (
    <>
      <Wrapper>
        <Container>
          <WrapperItem>
            {isLogged ? (
              <>
                {!isMobile && (
                  <MenuWrapper>
                    <MenuItem onClick={handleClose}>
                      <Link to="/">Início</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/novo-ranking">Novo Ranking</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/registrar-treino">Registrar treino</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/meu-perfil">Meu Perfil</Link>
                    </MenuItem>
                  </MenuWrapper>
                )}

                {isMobile && (
                  <>
                    <span />
                    <ApplicationName>Gymgram</ApplicationName>
                    <Avatar
                      onClick={handleShow}
                      src="https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg"
                    />
                  </>
                )}
                {!isMobile && (
                  <Avatar onClick={handleShow} src={userInfos?.photoURL} />
                )}
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

      {isLogged && (
        <>
          <OffCanvasStyled show={show} placement={"end"} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Gymgram</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {isMobile && (
                <Avatar onClick={handleShow} src={userInfos?.photoURL} mobile />
              )}
              <MenuItemMobile onClick={handleClose}>
                <Link to="/">Início</Link>
              </MenuItemMobile>
              <MenuItemMobile onClick={handleClose}>
                <Link to="/novo-ranking">Novo Ranking</Link>
              </MenuItemMobile>
              <MenuItemMobile onClick={handleClose}>
                <Link to="/registrar-treino">Registrar treino</Link>
              </MenuItemMobile>
              <MenuItemMobile onClick={handleClose}>
                <Link to="/meu-perfil">Meu Perfil</Link>
              </MenuItemMobile>
              <LogoutButton onClick={purgeUserStorage}>Logout</LogoutButton>
            </Offcanvas.Body>
          </OffCanvasStyled>
        </>
      )}
    </>
  );
};
