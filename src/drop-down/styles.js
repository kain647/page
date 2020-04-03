import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  user-select: none;
  width: 150px;
  color: gray;
  position: relative;
`;
export const CurrentValue = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ccc;
  width: 150px;
  padding: 10px 0 10px 0;
`;
export const ListContainer = styled.div`
  display: flex;
  width: 100%;
  top: 100%;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
`;
export const List = styled.div`
  display: flex;
  padding: 10px;
  &:hover {
    background-color: gray;
    color: #fff;
  }
`;
