import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const FormElement = styled.form`
  width: 100%;
  border-radius: 20px;
  padding: 16px 12px;
  background-color: #342f3a;
  margin: 16px 0;
  color: #ffffff;
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
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;

export const LabelStyled = styled(Form.Label)`
  text-align: center;
  margin-top: 16px;
  font-size: 18px;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
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
  margin-top: 16px;
`;

export const FormCheckStyled = styled(Form.Check)``;
