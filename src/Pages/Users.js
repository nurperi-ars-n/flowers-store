import React from "react";
import StyledTable from "../components/UI/Table";
import { useSelector } from "react-redux";

function Users() {
  const users = useSelector((state) => state.users.users);

  const userOptions = ['Name', 'Email', 'Phone']

  return (
    <>
      <StyledTable options={userOptions} data={users} />
    </>
  );
}

export default Users;
