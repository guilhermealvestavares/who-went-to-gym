import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseUtils";
import {
  Wrapper,
  ListItem,
  List,
  Title,
  SubTitle,
  NameList,
} from "./Ranking.style";

export const Ranking = () => {
  const [documentInfos, setDocumentInfos] = useState([]);
  const [persons, setPersons] = useState([]);
  const [sortedPersons, setSortedPersons] = useState([]);

  const sortPersons = () => {
    setSortedPersons(persons.sort((prev, next) => next.times - prev.times));
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

  useEffect(() => {
    sortPersons();
  }, [sortPersons]);

  return (
    <>
      <Title>Ranking</Title>
      <Wrapper>
        <List>
          {sortedPersons.map(({ name, lastTime, times }, index) => (
            <ListItem>
              <span>{`${index + 1}ΒΊ`}</span>
              <NameList>{`${name}`}</NameList>
              <span>{`${times} vezes`}</span>
              <span>
                {`${new Date(lastTime.seconds * 1000).toLocaleDateString()} ${
                  index === 0
                    ? " π"
                    : index === sortedPersons.length - 1
                    ? "π¦"
                    : "π"
                }`}
              </span>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </>
  );
};
