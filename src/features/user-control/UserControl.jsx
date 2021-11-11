import React from "react";
import style from "./UserControl.module.css";

export default function UserControl({ content }) {
  const { username, email, avatar } = content || "";
  const title = content ? "Edit User" : "Add User";

  return (
    <div className={style.root}>
      <div className={style.container}>
        <h3 className={style.title}>{title}</h3>
        <form className={style.form}>
          <div className={style.field}>
            <label>Username</label> <br />
            <input type="text" value={username} placeholder="Ex: John Doe" />
          </div>
          <div className={style.field}>
            <label>Email</label> <br />
            <input
              type="text"
              value={email}
              placeholder="Ex: johndoe@example.com"
            />
          </div>
          <div className={style.field}>
            <label>Avatar</label> <br />
            <div className={style.random}>Random Avatar</div>
            <img src="/icons/user-1.png" alt="Avatar" />
          </div>
          <button type="submit" className={style.submit}>
            {content ? "Save" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
