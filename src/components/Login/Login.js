import { Box, Title } from "./Login.style";
import GoogleButton from "react-google-button";

export const Login = () => {
  return (
    <Box>
      <Title>Entre e participe de rankings em instantes</Title>
      <GoogleButton label="Entrar com o Google" />
    </Box>
  );
};
