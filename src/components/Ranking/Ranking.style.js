import styled from "styled-components";

export const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 405px;
  margin-bottom: 24px;
`;

export const SubTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 12px;
  margin-bottom: 4px;
  text-align: center;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  list-style: none;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  height: 40px;
  padding: 12px;
  font-weight: bold;
  margin-bottom: 6px;
  align-items: center;
  justify-content: space-between;
`;

export const NameList = styled.span`
  width: 70px;
`;

export const SpanAdjusted = styled.span`
  margin-bottom: 4px;
`;
