import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  user-select: none;
  width: 100px;
  color: #fff;
  position: relative;
`;
export const CurrentValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  background-color: #ccc;
  padding: 10px 15px 10px 15px;
`;
export const ListContainer = styled.div`
  display: flex;
  width: 130px;
  top: 100%;
  flex-direction: column;
  background-color: #bebebe;
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
