import { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
// The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.

export const UsersUseRef = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const preventFetch = useRef(true); // -> {current: true}

  // prevent initial fetch onload
  useEffect(() => {
    if (preventFetch.current) {
      preventFetch.current = false; // update the state for next re-render
      return; // go out, don't fetch
    }

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [show]); // depends on show state change

  const handleClick = () => setShow(true);
  console.log(users);

  return (
    <div className="users-wrapper">
      {!!users.length &&
        show &&
        users.map((user) => <p key={user.id}>{user.name}</p>)}

      <Button onClick={handleClick}>Show All Users</Button>
    </div>
  );
};
