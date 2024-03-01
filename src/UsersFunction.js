import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersFunction = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data); // Log the response
        setUsers(response.data); // Update state with fetched users
      })
      .catch((error) => console.log("Error fetching users:", error));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersFunction;
