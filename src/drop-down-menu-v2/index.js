import React, { useState } from "react";
import {
  Content,
  ProfileContainer,
  Header,
  ListContainer,
  ListItem,
  HeaderText
} from "./styles";

const listItems = [
  {
    href: "admin-settings",
    label: "ADMIN SETTINGS"
  },
  {
    href: "edit-users",
    label: "EDIT USERS"
  },
  {
    href: "web-statistics",
    label: "WEB STATISTICS"
  },
  {
    href: "upload-settings",
    label: "UPLOAD SETTINGS"
  },
  {
    href: "edit-slider",
    label: "EDIT SLIDER"
  }
];

const ArrowIcon = ({ active }) => {
  let iconClassName = "fas fa-caret-";
  iconClassName += active ? "up" : "down";
  return <i className={iconClassName} />;
};

const Profile = () => {
  const [current, changeItem] = useState(listItems[0]);
  const [listOpen, toggle] = useState(false);
  return (
    <Content>
      <HeaderText>Dropdown Menu UI</HeaderText>
      <ProfileContainer>
        <Header onClick={() => toggle(!listOpen)}>
          {current.label}
          <ArrowIcon active={listOpen} />
        </Header>
        {listOpen && (
          <ListContainer>
            {listItems.map(item => {
              return (
                <ListItem
                  href={item.href}
                  /*onClick={() => {
                    changeItem(item);
                    toggle(!listOpen);
                  }}*/
                >
                  {item.label}
                </ListItem>
              );
            })}
          </ListContainer>
        )}
      </ProfileContainer>
    </Content>
  );
};

export default Profile;
