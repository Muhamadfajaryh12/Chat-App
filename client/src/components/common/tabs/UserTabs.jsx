import React, { useEffect, useState } from "react";
import UserBox from "../UserBox";
import ModalContact from "../ModalContact";
import { ContactAPI } from "../../../api/Contact";

const UserTabs = ({ setContent }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await ContactAPI.getContact();
      setData(response);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div className="mt-2">
      <ModalContact />
      <div className="section-list-user">
        {data?.data?.map((item) => (
          <UserBox key={item.id} nama={item.username} setContent={setContent} />
        ))}
      </div>
    </div>
  );
};

export default UserTabs;
