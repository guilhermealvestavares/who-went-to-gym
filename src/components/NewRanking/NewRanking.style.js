import styled from "styled-components";

export const Form = styled.form`
  border: 2px solid rgba(149, 165, 166, 0.5);
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 24px;
  margin: 24px 0;
`;

export const WrapperFields = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18px 0;
`;

export const WrapperOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const Question = styled.label`
  font-size: 24px;
  font-weight: bold;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
`;
