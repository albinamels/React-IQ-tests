import { useState, useEffect } from "react";
import { Button } from "@mui/material"; // npm install @mui/material @emotion/react @emotion/styled

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  // data is fetched onload and hidden, waiting for show btn
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleClick = () => setShow(true);
  // console.log(users);

  return (
    <div className="users-wrapper">
      {!!users.length &&
        show &&
        users.map((user) => <p key={user.id}>{user.name}</p>)}

      <Button variant="contained" onClick={handleClick}>
        Show All Users
      </Button>
    </div>
  );
};
