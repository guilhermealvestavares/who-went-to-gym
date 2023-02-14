import styled from "styled-components";

export const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #5f27cd;
  text-align: center;
`;

export const Wrapper = styled.div`
  padding: 24px 0;
  margin: 24px auto;
  border-radius: 8px;
  width: 100%;
  max-width: 330px;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  min-height: 140px;
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
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  list-style: none;
  background-color: #ffffff;
  padding: 12px;
  font-weight: bold;
  margin-bottom: 4px;
  justify-content: center;
  align-items: center;

  &:nth-child(2n + 3) {
    color: #ffffff;
    background-color: rgba(95, 39, 205, 0.6);
  }

  &:first-child {
    color: #ffffff;
    background-color: rgba(95, 39, 205, 0.6);
  }
`;
