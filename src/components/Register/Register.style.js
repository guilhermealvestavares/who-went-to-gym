import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  padding: 16px 12px;
  background-color: #342f3a;
  margin: 16px 0;
  color: #ffffff;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #ffffff;
`;

export const Description = styled.p``;

export const SucessImage = styled.img`
  margin: 0 auto;
  padding: 16px 0;
  width: 120px;
`;

export const Select = styled(Form.Select)`
  background-color: "#2c2831" !important;
  color: "#ffffff" !important;
`;

export const Button = styled.input`
  border-radius: 20px;
  background-color: #ffffff;
  padding: 0px 12px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  border: 0;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 24px;
  height: 55px;
`;

export const ButtonRedirect = styled.button`
  border-radius: 20px;
  background-color: #ffffff;
  padding: 0px 12px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  border: 0;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 24px;
  height: 55px;
`;

export const ButtonAddPhoto = styled.label`
  border-radius: 20px;
  border: 1px solid #ffffff;
  padding: 0px 12px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  border: 0;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 8px;
  height: 55px;
  border: 2px solid #ffffff;
  cursor: pointer;
`;

export const ButtonDefaultFile = styled.input`
  display: none;
`;

export const WorkoutTimesInfo = styled.p`
  color: #ffffff;
  font-weight: bold;
  margin-top: 14px;
`;
