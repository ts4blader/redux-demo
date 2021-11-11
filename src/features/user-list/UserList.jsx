import React from "react";
import style from "./UserList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "./UserSlice";
import { useHistory } from "react-router";

const Item = ({ content }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.item}>
      <div className={style.userAvatar}>
        <img src={`/icons/user-${content.avatar}.png`} alt={content.username} />
      </div>
      <div className={style.info}>
        <p className={style.username}>{content.username}</p>
        <p className={style.email}>{content.email}</p>
      </div>
      <div className={style.control}>
        <button className={style.edit}>Edit</button>
        <button
          className={style.remove}
          onClick={() => dispatch(removeUser(content))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default function UserList() {
  const users = useSelector((state) => state.users);
  const history = useHistory();

  return (
    <div className={style.userList}>
      <div className={style.header}>
        <h3 className={style.title}>Users list</h3>
        <div className={style.addBtn} onClick={() => history.push("/add-user")}>
          Add user
        </div>
      </div>
      <div className={style.list}>
        {users.map((item, index) => {
          return <Item content={item} key={index} />;
        })}
      </div>
    </div>
  );
}
