import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { ProfileInfos } from "../components";
import { UserContext } from "../contexts/UserContext";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebaseUtils";
import { Calendar, Loader } from "../components";
import { Title } from "./pages.style";
export const MyProfile = () => {
  const { isLogged, setIsLogged, setUserInfos, userInfos } =
    useContext(UserContext);
  const [userWorkoutInfos, setUserWorkoutsInfos] = useState("");
  const { email } = userInfos;

  useEffect(() => {
    const getUserWorkoutInfos = async () => {
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserWorkoutsInfos(docSnap.data());
      } else {
        setUserWorkoutsInfos([]);
      }
    };

    getUserWorkoutInfos();
  }, [email]);

  return (
    <>
      {userWorkoutInfos && (
        <ProfileInfos
          userInfos={userInfos}
          userWorkoutInfos={userWorkoutInfos}
        />
      )}

      <Container>
        <Title>Treinos</Title>
        {!userWorkoutInfos && <Loader />}
        {userWorkoutInfos && <Calendar userWorkoutInfos={userWorkoutInfos} />}
      </Container>
    </>
  );
};
