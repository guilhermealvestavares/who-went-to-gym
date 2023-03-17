import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 8px;
  width: 80%;
  max-width: 360px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgb(35, 35, 79);
`;

export const Select = styled.select`
  width: 100%;
  border-radius: 4px;
  height: 40px;
  margin-bottom: 6px;
  text-align: center;
`;

export const Button = styled.input`
  width: 100%;
  height: 40px;
  background-color: #5f27cd;
  color: #ffffff;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;
