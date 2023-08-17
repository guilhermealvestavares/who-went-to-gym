import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 12px 0;
  border-bottom: 2px solid rgba(149, 165, 166, 0.5);
`;

export const WrapperItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #5f27cd;
  color: #ffffff;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: red;
  color: #ffffff;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;
