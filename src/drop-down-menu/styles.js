import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  cursor: pointer;
  flex-direction: column;
  position: relative;
`;

export const CurrentValue = styled.div`
  padding: 10px;
  background-color: #61dafb;
  color: white;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  /*box-shadow: inset 0 0 0 1px gray;*/
  position: absolute;
  width: 100%;
  top: 100%;
  background-color: #ddd;
`;
export const Item = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
