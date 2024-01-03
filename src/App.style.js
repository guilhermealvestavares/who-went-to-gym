import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #ffffff;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
  margin: 12px 0 24px 0;
  color: #ffffff;
`;

export const WrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const NonLoggedFrame = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StartButton = styled.button`
  border-radius: 20px;
  background-color: #ffffff;
  padding: 0px 12px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  border: 0;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  width: 300px;
`;
