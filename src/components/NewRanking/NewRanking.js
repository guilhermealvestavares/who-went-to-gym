import { useForm } from "react-hook-form";
import {
  FormElement,
  SubmitButton,
  FormCheckStyled,
  LabelStyled,
} from "./NewRanking.style";
import Alert from "@mui/material/Alert";
import { format } from "date-fns";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

export const NewRanking = () => {
  const navigate = useNavigate();

  const { userInfos } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const normalizeDate = (date) => {
    const dateNormalized = date.replace("-", ",");
    return format(new Date(dateNormalized), "dd-MM-yyyy");
  };

  const onSubmit = async (data) => {
    const { name, sports, finalDate } = data;
    const { displayName, email } = userInfos;
    const DOC_HASH = uuidv4();

    await setDoc(doc(db, "rankings", DOC_HASH), {
      id: DOC_HASH,
      name,
      sports,
      finalDate: normalizeDate(finalDate),
      creator: {
        name: displayName,
        email,
      },
      participants: [email],
    });

    navigate(`/rankings/${DOC_HASH}`);
  };

  return (
    <Container>
      <FormElement onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formGroupName">
          <LabelStyled>Nome do grupo</LabelStyled>
          <Form.Control
            type="text"
            placeholder="Digite um nome para o grupo"
            {...register("name", { required: true })}
          />
        </Form.Group>
        {errors.name && (
          <Alert severity="error">
            Você deve escolher um nome para a sua competição
          </Alert>
        )}

        <Form.Group controlId="formGroupSports">
          <LabelStyled>Selecione os esportes válidos</LabelStyled>
          <FormCheckStyled
            type="switch"
            {...register("sports", { required: true })}
            value="Academia"
            label="Academia"
          />

          <FormCheckStyled
            type="switch"
            {...register("sports")}
            value="Cooper"
            label="Cooper"
          />

          <FormCheckStyled
            type="switch"
            {...register("sports")}
            value="Futebol"
            label="Futebol"
          />

          <FormCheckStyled
            type="switch"
            {...register("sports")}
            value="Vôlei"
            label="Vôlei"
          />

          <FormCheckStyled
            type="switch"
            {...register("sports")}
            value="Crossfit"
            label="Crossfit"
          />

          {errors.sports && (
            <Alert severity="error">
              Você deve selecionar no mínimo uma opção
            </Alert>
          )}
        </Form.Group>

        <Form.Group controlId="formGroupName">
          <LabelStyled>Data para o término da competição</LabelStyled>
          <Form.Control
            type="date"
            {...register("finalDate", { required: true })}
            placeholder="Digite uma data para finalizar a competição"
          />
        </Form.Group>
        {errors.finalDate && (
          <Alert severity="error">Você deve selecionar uma data</Alert>
        )}

        <SubmitButton type="submit" variant="light" color="success">
          Criar ranking
        </SubmitButton>
      </FormElement>
    </Container>
  );
};
