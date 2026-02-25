import React from "react";

const User = ({ user }) => {
  //   console.log(user);
  const { name, email } = user;
  return (
    <div className="userStyle">
      <h3>Name :{name}</h3>
      <p>
        <small>Email :{email}</small>
      </p>
    </div>
  );
};

export default User;
