import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 12px 0;
  border-bottom: 2px solid #ffffff;
  margin-bottom: 24px;
`;

export const WrapperItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #5f27cd;
  color: #ffffff;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: red;
  color: #ffffff;
  border: none;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;

export const MenuWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export const MenuItem = styled.li`
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  margin: 0;
  padding-right: 24px;
  text-decoration: none;
  a {
    text-decoration: none;
    color: #ffffff;
  }

  a:hover {
    color: #bdc3c7;
  }
`;

export const ApplicationName = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const StripMyWorkouts = styled.div`
  width: 100%;
  padding: 12px 0;
  margin-bottom: 32px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  background-color: #16a085;
`;
