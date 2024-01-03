import styled from "styled-components";

export const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #ffffff;
`;

export const BoxInfos = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: 16px 12px;
  background-color: #342f3a;
  margin: 16px 0;
  color: #ffffff;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

export const LabelInfos = styled.p`
  font-weight: bold;
`;

export const Infos = styled.span`
  display: inline-block;
  font-weight: normal;
`;

export const WrapperBadge = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
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
  margin-right: 6px;
  margin-bottom: 6px;
`;
