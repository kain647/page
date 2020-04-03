import React, { useState } from "react";
import { DropDownContainer, CurrentValue, ListContainer, List } from "./styles";

const listItems = [
  {
    label: "New York",
    value: 1
  },
  {
    label: "Dublin",
    value: 2
  },
  {
    label: "California",
    value: 3
  },
  {
    label: "Istanbul",
    value: 4
  },
  {
    label: "Izmir",
    value: 5
  },
  {
    label: "Oslo",
    value: 6
  }
];

const DropDown = () => {
  const [current, changeItem] = useState(listItems[0]);
  const [listOpen, toggle] = useState(false);
  return (
    <DropDownContainer>
      <CurrentValue onClick={() => toggle(!listOpen)}>
        {current.label}
      </CurrentValue>
      {listOpen && (
        <ListContainer>
          {listItems.map(list => {
            return (
              <List
                onClick={() => {
                  changeItem(list);
                  toggle(!listOpen);
                }}
              >
                {list.label}
              </List>
            );
          })}
        </ListContainer>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
