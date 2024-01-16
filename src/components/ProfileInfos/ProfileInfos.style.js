import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 0 0 20px 20px;
  padding: 16px 12px;
  background-color: #34303a;
  margin-bottom: 32px;
  margin-top: -24px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 768px;
    margin: -24px auto 32px auto;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding-top: 24px;
`;

export const Avatar = styled.img`
  max-width: 150px;
  border-radius: 50%;
  display: block;
  max-width: 200px;
  height: ${(props) => (props?.mobile ? "100px" : "50px")};
  margin: ${(props) => (props?.mobile ? "0 auto" : "0")};
  margin: 1px;
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  width: 100%;
  max-height: 80px;
`;

export const TabItem = styled.div`
  border-right: ${(props) => (props?.divisor ? " 1px solid #ffffff;" : "none")};
  width: 120px;
  padding: 0 18px;

  text-align: center;
`;

export const TabItemTitle = styled.span`
  color: #ffffff;
  font-size: 12px;
`;

export const TabItemValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;
