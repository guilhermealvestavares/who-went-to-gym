import { useEffect, useState } from 'react';
import './App.css';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"; 
import { db } from './firebaseUtils'

function App() {

  const [documentInfos, setDocumentInfos] = useState([])
  const [persons, setPersons] = useState([])
  const [selectPerson, setSelectPerson] = useState("")

  const handleClickRegister = async () => {
    console.log("teste")
    await updateDoc(doc(db, "person", selectPerson), {
      lastTime: new Date(),
      times: persons.find(element => element.id === selectPerson).times+1
    })
  }

  const handleSelectUser = (id) => {
    setSelectPerson(id)
  }

  useEffect(() => {
    const getDocumentInfos = async() => {
      const responsePersons = await getDocs(collection(db, "person"));
      setDocumentInfos(responsePersons)
    };
    getDocumentInfos()
  },[]);

  useEffect(() => {
    console.log(documentInfos)
    documentInfos?.forEach((doc) => {
      console.log(doc.data());
     setPersons(persons => [...persons, doc.data()] )
    })
  }, [documentInfos])


  return (
    <div className="App">
      {persons && (
        <select name="persons" onChange={event => handleSelectUser(event.target.value)}>
          {persons?.map(({name, id}, index) => (
            <option key={name+index} value={id}>{name}</option>
          ))}
        </select>
      )} 
      <input type="button" onClick={handleClickRegister} value="Registrar treino"/>
    </div>
  );
}

export default App;
