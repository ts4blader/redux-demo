import React, { useState } from "react";
import style from "./UserControl.module.css";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { updateUser, addUser } from "../user-list/UserSlice";

const initial = {
  username: "",
  email: "",
  avatar: 1,
};

export default function UserControl({ content }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const { username, email, avatar } = content || initial;
  const [picture, setPicture] = useState(avatar);

  const title = content ? "Edit User" : "Add User";
  const onSubmit = (data) => {
    if (content) {
      dispatch(updateUser({ ...data, avatar: picture }));
      history.push("/");
    } else {
      dispatch(addUser({ ...data, avatar: picture }));
      alert("User already added!");
    }
  };

  return (
    <div className={style.root}>
      <div className={style.container}>
        <h3 className={style.title}>{title}</h3>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.field}>
            <label>Username</label> <br />
            <input
              type="text"
              defaultValue={username}
              {...register("username")}
              placeholder="Ex: John Doe"
            />
          </div>
          <div className={style.field}>
            <label>Email</label> <br />
            <input
              type="email"
              defaultValue={email}
              {...register("email")}
              placeholder="Ex: johndoe@example.com"
            />
          </div>
          <div className={style.field}>
            <label>Avatar</label> <br />
            <div
              className={style.random}
              onClick={() => {
                setPicture(Math.floor(Math.random() * 5) + 1);
              }}
            >
              Random Avatar
            </div>
            <img src={`/icons/user-${picture}.png`} alt="Avatar" />
          </div>
          <button type="submit" className={style.submit}>
            {content ? "Save" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
}
