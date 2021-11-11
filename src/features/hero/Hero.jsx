import React from "react";
import style from "./Hero.module.css";
// import bg from "/images/bg.jpg";

export default function Hero() {
  const bgStyle = {
    backgroundImage: `url("/images/bg.jpg")`,
    backgroundSize: "cover",
  };

  return (
    <div className={style.hero} style={bgStyle}>
      <p className={style.text}>Browse your user</p>
    </div>
  );
}
