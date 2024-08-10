import React from "react";
import UserBox from "../UserBox";
import ModalContact from "../ModalContact";

const UserTabs = () => {
  return (
    <div className="mt-2">
      <ModalContact />
      <div className="section-list-user">
        {Array.from({ length: 5 }).map((_, index) => (
          <UserBox key={index} />
        ))}
      </div>
    </div>
  );
};

export default UserTabs;
