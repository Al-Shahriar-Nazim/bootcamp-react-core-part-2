import React, { use } from "react";
import User from "./User";

const Users = ({ fetchUsers }) => {
  const users = use(fetchUsers);
  console.log(users);
  return (
    <div className="userStyle">
      <h3>user section :{users.length}</h3>
      {
        users.map(user =><User key={user.id} user={user}></User>)
      }
    </div>
  );
};

export default Users;
