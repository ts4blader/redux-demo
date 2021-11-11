import React from "react";
import style from "./UserList.module.css";
import { users } from "../../data/users";

const Item = ({ content }) => {
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
        <button className={style.remove}>Remove</button>
      </div>
    </div>
  );
};

export default function UserList({ data }) {
  return (
    <div className={style.userList}>
      <div className={style.header}>
        <h3 className={style.title}>Users list</h3>
        <div className={style.addBtn}>Add user</div>
      </div>
      <div className={style.list}>
        {users.map((item, index) => {
          return <Item content={item} key={index} />;
        })}
      </div>
    </div>
  );
}