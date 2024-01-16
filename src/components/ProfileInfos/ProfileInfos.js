import {
  Wrapper,
  Title,
  Avatar,
  Tab,
  TabItem,
  TabItemTitle,
  TabItemValue,
} from "./ProfileInfos.style";

export const ProfileInfos = ({ userInfos, userWorkoutInfos }) => {
  const { displayName, photoURL } = userInfos;
  const { lastTime, times, workoutInfos } = userWorkoutInfos;

  return (
    <Wrapper>
      <Avatar mobile src={photoURL} />
      <Title> {displayName}</Title>
      <Tab>
        <TabItem divisor="true">
          <TabItemTitle>Treinos</TabItemTitle>
          <TabItemValue>{times}</TabItemValue>
        </TabItem>
        <TabItem>
          <TabItemTitle>Último treino</TabItemTitle>
          <TabItemValue> {lastTime}</TabItemValue>
        </TabItem>
      </Tab>
    </Wrapper>
  );
};
