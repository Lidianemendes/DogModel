import React from "react";
import "/src/styles/Header.css";

export default function Header() {
  const Head = () => {
    return (
      <div className="star">
        <h1>DOG MODEL</h1>
        <ul>
          <li>A Dog Model</li>
          <li>Modelos</li>
          <li>Adote um Pet</li>
          <li>Portifólio</li>
          <li>Contato</li>
        </ul>
      </div>
    );
  };
  return <>{Head()}</>;
}
