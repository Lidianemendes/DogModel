import React from "react";
import facebook from "/src/imagens/facebook.png";
import instagram from "/src/imagens/instagram.png";
import watsapp from "/src/imagens/watsapp.png";
import "/src/styles/Footer.css";

export default function Footer() {
  function Redes() {
    return (
      <div className="conectar">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={watsapp} alt="" />
      </div>
    );
  }
  return (
    <>
      <h1>{Redes()}</h1>
    </>
  );
}
