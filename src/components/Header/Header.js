import {
  Wrapper,
  LoginButton,
  WrapperItem,
  LogoutButton,
} from "./Header.style";
import Container from "react-bootstrap/Container";
import { auth } from "../../firebaseUtils";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState, useContext } from "react";
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
        console.log(result.user);
        localStorage.setItem("userInfos", result?.user);
        localStorage.setItem("isLogged", true);
        setIsLogged(localStorage.getItem("isLogged"));
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
              <img src={userInfos.photoURL} />
              <LogoutButton onClick={purgeUserStorage}>Logout</LogoutButton>
            </>
          ) : (
            <GoogleButton onClick={handlerGoogleLogin}>Login</GoogleButton>
          )}
        </WrapperItem>
      </Container>
    </Wrapper>
  );
};
