import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1249826048058982402/y-2KKMiS_400x400.jpg" alt="Paulo Henrique"/>
        <div>
          <strong>Paulo Henrique</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Respoda com V para Falso e F para Verdadeiro:
        <br/><br/>
        Sabendo que um pote de grãos de arroz em marte tem o peso de um filhote de bacurim com diabetes, diga qual é o tamanho em hectometros² da pizza que o macaco albino asiático mordeu.
      </p>

      <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
