import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebaseUtils";
import {
  Wrapper,
  Button,
  Title,
  Description,
  SucessImage,
  WorkoutTimesInfo,
  ButtonAddPhoto,
  ButtonDefaultFile,
  ButtonRedirect,
} from "./Register.style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Form from "react-bootstrap/Form";
import Alert from "@mui/material/Alert";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Loader } from "../Loader";

export const Register = () => {
  const navigate = useNavigate();
  const [registerPhoto, setRegisterPhoto] = useState("");
  const [registerPhotoClicked, setRegisterPhotoClicked] = useState(false);
  const [selectSport, setSelectSport] = useState("");
  const [currentUserInfos, setCurrentUserInfos] = useState("");
  const { userInfos } = useContext(UserContext);
  const { email, photoURL } = userInfos;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `workouts/${uuidv4()}`);

    const uploadOptions = {
      contentType: "image/jpeg",
    };

    try {
      await uploadBytes(storageRef, file, uploadOptions);

      const url = await getDownloadURL(storageRef);

      return url;
    } catch (error) {
      console.error("Erro no upload da imagem:", error);
      throw error;
    }
  };

  const handleUploadImage = async (event) => {
    setRegisterPhotoClicked(true);
    const file = event.target.files[0];
    if (file) {
      try {
        const url = await uploadImage(file);
        setRegisterPhoto(url);
        setRegisterPhotoClicked(false);
      } catch (error) {
        console.error("Erro durante o upload da imagem:", error);
      }
    }
  };

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
          image: registerPhoto ? registerPhoto : null,
        },
      ],
    });
    window.location.reload(true);
    console.log(currentUserInfos);
  };

  const handleSelectSport = (sport) => {
    setSelectSport(sport);
  };

  const goToHome = () => {
    navigate(`/`);
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
          <ButtonRedirect onClick={goToHome}>Ir para rankings</ButtonRedirect>
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
            <Form.Group controlId="formGroupSport">
              <Form.Select
                style={{ backgroundColor: "#2c2831", color: "#ffffff" }}
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
            </Form.Group>

            <Form.Group controlId="formGroupPhoto">
              {registerPhotoClicked && <Loader />}
              {!registerPhoto && !registerPhotoClicked && (
                <>
                  <ButtonAddPhoto for="file-upload">
                    Adicionar foto
                  </ButtonAddPhoto>
                  <ButtonDefaultFile
                    id="file-upload"
                    type="file"
                    accept=".webp, .png, .jpg, .jpeg"
                    {...register("uploadImage", { required: true })}
                    onChange={handleUploadImage}
                  />
                </>
              )}

              <WorkoutTimesInfo>
                {registerPhoto ? "Foto registrada com sucesso 📷" : ""}
              </WorkoutTimesInfo>
              {errors.uploadImage && (
                <Alert severity="error">
                  Você deve fazer o upload de uma foto
                </Alert>
              )}
            </Form.Group>

            <Button
              type="submit"
              value="Registrar treino"
              disabled={registerPhotoClicked}
            />
          </form>
        </Wrapper>
      )}
    </>
  );
};
