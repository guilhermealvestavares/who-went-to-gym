import { useEffect, useState } from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import { isSameDate } from "../../utils/isSameDate";
import {
  Wrapper,
  Select,
  Button,
  Title,
  Description,
  SucessImage,
} from "./Register.style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Register = () => {
  const [selectSport, setSelectSport] = useState("");
  const [currentUserInfos, setCurrentUserInfos] = useState("");
  const { userInfos } = useContext(UserContext);
  const { email } = userInfos;

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
      times: currentUserInfos ? currentUserInfos.workoutInfos.length + 1 : 1,
      workoutInfos: [
        ...(currentUserInfos?.workoutInfos || []),
        {
          sport: selectSport,
          date: new Date().toLocaleDateString(),
          image: null,
        },
      ],
    });
    window.location.reload();
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
        </Wrapper>
      )}
      {currentUserInfos.lastTime !== new Date().toLocaleDateString() && (
        <Wrapper>
          <Select
            name="sport"
            onChange={(event) => handleSelectSport(event.target.value)}
          >
            <option value="">Selecione o esporte</option>

            <option value="Academia">Academia</option>
            <option value="Cooper">Cooper</option>
            <option value="Futebol">Futebol</option>
            <option value="Vôlei">Vôlei</option>
          </Select>

          <Button
            type="button"
            onClick={handleClickRegister}
            value="Registrar treino"
          />
        </Wrapper>
      )}
    </>
  );
};
