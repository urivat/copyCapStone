import React from "react";
import UserWordList from "../../components/UserWordList/UserWordList";
import "./UserPage.css";

const UserPage = (props) => {
  const { userWords, user } = props;

  return (
    <div className="grid-container">
      <h1 className="grid-item1">{user.username} </h1>
      <UserWordList className="grid-item2" userWords={userWords} />
    </div>
  );
};

export default UserPage;
