import React from "react";
import facebook from "./imagens/facebook.png";
import instagram from "./imagens/instagram.png";
import watsapp from "./imagens/watsapp.png";
import "./styles/Footer.css";

export default function Footer() {
  function Redes() {
    return (
      <div className="conectar">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={watsapp} alt="" />
        <ul>
          <li>A Dog Model</li>
          <li>Modelos</li>
          <li>Adote um Pet</li>
          <li>Portifólio</li>
          <li>Contato</li>
        </ul>
      </div>
    );
  }
  return (
    <>
      <h2>{Redes()}</h2>
    </>
  );
}
