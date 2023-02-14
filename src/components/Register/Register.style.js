import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 24px auto;
  padding: 24px;
  border-radius: 8px;
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #5f27cd;
`;

export const Select = styled.select`
  width: 100%;
  border-radius: 4px;
  border: 2px solid #5f27cd;
  height: 30px;
`;

export const Button = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 8px;
  background-color: #5f27cd;
  color: #ffffff;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;
