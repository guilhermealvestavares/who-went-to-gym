import styled from "styled-components";

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

export const Title = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  max-width: 150px;
`;

export const Description = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;

export const TitleInfos = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
`;

export const Badge = styled.div`
  border-radius: 20px;
  background-color: #39373f;
  padding: 0px 12px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 50px;
  width: 130px;
  font-weight: bold;
`;

export const JoinButton = styled.button`
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
`;
