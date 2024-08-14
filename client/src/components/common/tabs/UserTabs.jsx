import React, { useEffect, useState } from "react";
import UserBox from "../UserBox";
import ModalContact from "../ModalContact";
import { ContactAPI } from "../../../api/Contact";

const UserTabs = ({ setContent, dataOnline }) => {
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
          <UserBox
            key={item.user_id}
            id={item.user_id}
            nama={item.username}
            setContent={setContent}
            dataOnline={dataOnline.filter(
              (onlineItem) => onlineItem.userId == item.user_id
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default UserTabs;
