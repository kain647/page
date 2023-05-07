import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 320px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#afb1b3, #dedddd);
  position: relative;
  user-select: none;
`;
export const HeaderText = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  font-size: 18px;
  color: #566b78;
  text-decoration: none;
`;
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: -50px;
  position: relative;
`;
export const Header = styled.div`
  display: flex;
  background-color: #1eb98f;
  color: #d2f1e9;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1eb98f;
  width: 100%;
  top: 100%;
  position: absolute;
`;
export const ListItem = styled.a`
  display: flex;
  color: #bfebdf;
  background-color: #1eb98f;
  cursor: pointer;
  padding: 5px;
  padding-left: 10px;
  &:hover {
    background-color: #1ea580;
  }
`;
