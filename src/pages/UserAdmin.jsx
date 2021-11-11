import React from "react";
import UserControl from "../features/user-control/UserControl";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserAdmin() {
  const users = useSelector((state) => state.users);
  const { userid } = useParams();
  const data = users.filter((user) => user.id === userid);
  return (
    <div className="user-admin">
      <UserControl content={data[0]} />
    </div>
  );
}
