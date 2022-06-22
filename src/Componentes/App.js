import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header.js";
import background from "/src/imagens/fundo dog.jpg";
import "/src/styles/App.css";
import Text from "./text.js";

export default function API() {
  const [dog, setDog] = useState([]);
  const [imagemAparecendo, setImagemAparecendo] = useState(false);

  function DogList() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDog(response.data.message);
      setImagemAparecendo(true);
    });
  }

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <Text />
      <button
        onClick={() => {
          DogList();
        }}
      >
        MODELOS
      </button>
      <>{imagemAparecendo && <img src={dog} alt="imagens de doguinhos" />}</>
    </div>
  );
}
