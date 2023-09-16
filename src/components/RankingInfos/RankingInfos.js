import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseUtils";

export const RankingInfos = () => {
  const { id } = useParams();

  useEffect(() => {
    const getRankingInfos = async () => {
      const docRef = doc(db, "rankings", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getRankingInfos();
  }, [id]);

  return (
    <>
      <p>{id}</p>
    </>
  );
};
