import styled from "styled-components";
import { createTheme } from "@mui/material/styles";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  border-radius: 20px;
  padding: 16px 12px;
  background-color: #342f3a;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-right: 12px;
    margin-bottom: 32px;
  }
`;
