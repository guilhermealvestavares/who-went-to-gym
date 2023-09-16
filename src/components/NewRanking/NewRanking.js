import { useForm } from "react-hook-form";
import {
  Form,
  WrapperFields,
  WrapperOptions,
  Label,
  Question,
} from "./NewRanking.style";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { format } from "date-fns";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const NewRanking = () => {
  const navigate = useNavigate();

  const { isLogged, setIsLogged, userInfos, setUserInfos } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <WrapperFields>
        <Question>Nome da competição</Question>
        <TextField
          label="Nome da competição"
          variant="standard"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <Alert severity="error">
            Você deve escolher um nome para a sua competição
          </Alert>
        )}
      </WrapperFields>
      <WrapperFields>
        <Question>Esportes que valerão pontos para este ranking:</Question>
        <WrapperOptions>
          <Checkbox
            type="checkbox"
            {...register("sports", { required: true })}
            value="academia"
          />
          <Label for="academia">Academia</Label>
        </WrapperOptions>

        <WrapperOptions>
          <Checkbox type="checkbox" {...register("sports")} value="cooper" />
          <Label for="cooper">Cooper</Label>
        </WrapperOptions>

        <WrapperOptions>
          <Checkbox type="checkbox" {...register("sports")} value="futebol" />
          <Label for="futebol">Futebol</Label>
        </WrapperOptions>
        <WrapperOptions>
          <Checkbox type="checkbox" {...register("sports")} value="volei" />
          <Label for="volei">Vôlei</Label>
        </WrapperOptions>
        <WrapperOptions>
          <Checkbox type="checkbox" {...register("sports")} value="crossfit" />
          <Label for="crossfit">Crossfit</Label>
        </WrapperOptions>
        {errors.sports && (
          <Alert severity="error">
            Você deve selecionar no mínimo uma opção
          </Alert>
        )}
      </WrapperFields>

      <WrapperFields>
        <Question>Até quando irá durar essa competição?</Question>
        <input type="date" {...register("finalDate", { required: true })} />
        {errors.finalDate && (
          <Alert severity="error">Você deve selecionar uma data</Alert>
        )}
      </WrapperFields>

      <Button type="submit" variant="contained" color="success">
        Criar ranking
      </Button>
    </Form>
  );
};
