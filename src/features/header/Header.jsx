import React from "react";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <h2 className={style.logo}>Redux App</h2>
        <p className={style.appName}>User management</p>
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 2rem;
          }
        `}
      </style>
    </header>
  );
}
