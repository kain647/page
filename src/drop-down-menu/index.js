import React, { useState } from "react";
import { DropDownContainer, ItemContainer, Item, CurrentValue } from "./styles";

const menuItems = [
  {
    label: "First",
    value: 1
  },
  {
    label: "Second",
    value: 2
  },
  {
    label: "Third",
    value: 3
  }
];

const DropDown = () => {
  const [current, changeItem] = useState(menuItems[0]);
  const [showItems, toggle] = useState(false);
  return (
    <DropDownContainer>
      <CurrentValue onClick={() => toggle(!showItems)}>
        {current.label}
      </CurrentValue>
      {showItems && (
        <ItemContainer>
          {menuItems.map(item => {
            return (
              <Item
                onClick={() => {
                  changeItem(item);
                  toggle(!showItems);
                }}
              >
                {item.label}
              </Item>
            );
          })}
        </ItemContainer>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
