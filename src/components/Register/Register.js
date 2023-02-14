import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import { isSameDate } from "../../utils/isSameDate";

export const Register = () => {
  const [documentInfos, setDocumentInfos] = useState([]);
  const [persons, setPersons] = useState([]);
  const [selectPerson, setSelectPerson] = useState("");

  const handleClickRegister = async () => {
    if (
      isSameDate(
        new Date(
          persons.find((element) => element.id === selectPerson)?.lastTime
            .seconds * 1000
        ),
        new Date()
      ) &&
      selectPerson
    ) {
      alert(
        `${
          persons.find((element) => element.id === selectPerson).name
        } já registrou um treino hoje`
      );
      window.location.reload();
    } else if (selectPerson) {
      await updateDoc(doc(db, "person", selectPerson), {
        lastTime: new Date(),
        times: persons.find((element) => element.id === selectPerson).times + 1,
      });
      alert(
        `${
          persons.find((element) => element.id === selectPerson).name
        }, o seu treino foi registrado com sucesso.`
      );
      window.location.reload();
    } else if (!selectPerson) {
      alert("Selecione uma pessoa para realizar a marcação");
    }
  };

  const handleSelectUser = (id) => {
    setSelectPerson(id);
  };

  useEffect(() => {
    const getDocumentInfos = async () => {
      const responsePersons = await getDocs(collection(db, "person"));
      setDocumentInfos(responsePersons);
    };
    getDocumentInfos();
  }, []);

  useEffect(() => {
    documentInfos?.forEach((doc) => {
      setPersons((persons) => [...persons, doc.data()]);
    });
  }, [documentInfos]);

  return (
    <div className="App">
      {persons && (
        <select
          name="persons"
          onChange={(event) => handleSelectUser(event.target.value)}
        >
          <option value=""></option>
          {persons?.map(({ name, id }, index) => (
            <option key={name + index} value={id}>
              {name}
            </option>
          ))}
        </select>
      )}
      <input
        type="button"
        onClick={handleClickRegister}
        value="Registrar treino"
      />
    </div>
  );
};
