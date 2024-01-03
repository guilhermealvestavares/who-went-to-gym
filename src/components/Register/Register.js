import { useEffect, useState } from "react";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import { isSameDate } from "../../utils/isSameDate";
import { Wrapper, Select, Button } from "./Register.style";
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
        console.log("Document data:", docSnap.data());
        setCurrentUserInfos(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getCurrentUserInfos();
  }, []);

  const handleClickRegister = async () => {
    await updateDoc(doc(db, "users", email), {
      lastTime: new Date(),
      times: currentUserInfos.times + 1,
      workoutInfos: [
        ...currentUserInfos.workoutInfos,
        {
          sport: selectSport,
          date: new Date(),
          image: null,
        },
      ],
    });
  };

  const handleSelectSport = (sport) => {
    console.log(selectSport);
    setSelectSport(sport);
  };

  return (
    <>
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
    </>
  );
};
