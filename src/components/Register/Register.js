import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import {
  Wrapper,
  Button,
  Title,
  Description,
  SucessImage,
  WorkoutTimesInfo,
} from "./Register.style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Form from "react-bootstrap/Form";
import Alert from "@mui/material/Alert";

export const Register = () => {
  const [selectSport, setSelectSport] = useState("");
  const [currentUserInfos, setCurrentUserInfos] = useState("");
  const { userInfos } = useContext(UserContext);
  const { email, photoURL } = userInfos;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getCurrentUserInfos = async () => {
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCurrentUserInfos(docSnap.data());
      }
    };
    getCurrentUserInfos();
  }, [email]);

  const handleClickRegister = async () => {
    await updateDoc(doc(db, "users", email), {
      lastTime: new Date().toLocaleDateString(),
      times: currentUserInfos?.workoutInfos?.length
        ? currentUserInfos?.workoutInfos?.length + 1
        : 1,
      workoutInfos: [
        ...(currentUserInfos?.workoutInfos || []),
        {
          sport: selectSport,
          date: new Date().toLocaleDateString(),
          image: null,
        },
      ],
    });
    window.location.reload(true);
    console.log(currentUserInfos);
  };

  const handleSelectSport = (sport) => {
    setSelectSport(sport);
  };

  return (
    <>
      {currentUserInfos.lastTime === new Date().toLocaleDateString() && (
        <Wrapper>
          <SucessImage src="https://cdn-icons-png.flaticon.com/512/148/148767.png" />
          <Title>Boa! Atividade registrada</Title>
          <Description>
            Agora seus amigos podem ver suas atividades no ranking do seu grupo.
          </Description>
          {currentUserInfos?.times && (
            <WorkoutTimesInfo>
              {currentUserInfos?.times}º treino registrado em 2024 💪🏻
            </WorkoutTimesInfo>
          )}
        </Wrapper>
      )}
      {currentUserInfos.lastTime !== new Date().toLocaleDateString() && (
        <Wrapper>
          <SucessImage src={photoURL} alt="Foto do usuário" />
          {currentUserInfos?.times && (
            <WorkoutTimesInfo>
              {currentUserInfos?.times}{" "}
              {currentUserInfos.times === 1 ? "treino" : "treinos"} 💪🏻
            </WorkoutTimesInfo>
          )}
          <form onSubmit={handleSubmit(handleClickRegister)}>
            <Form.Select
              name="sport"
              {...register("sport", { required: true })}
              onChange={(event) => handleSelectSport(event.target.value)}
              aria-label="Default select example"
            >
              <option value="">Selecione o esporte</option>

              <option value="Academia">Academia</option>
              <option value="Cooper">Cooper</option>
              <option value="Futebol">Futebol</option>
              <option value="Vôlei">Vôlei</option>
              <option value="Crossfit">Crossfit</option>
            </Form.Select>
            {errors.sport && (
              <Alert severity="error">Você deve selecionar uma esporte</Alert>
            )}

            <Button type="submit" value="Registrar treino" />
          </form>
        </Wrapper>
      )}
    </>
  );
};
