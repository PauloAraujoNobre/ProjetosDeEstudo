import React from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherFrom() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preecher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome compelto"/>
          <Input name="avatar" label="Avatar"/>
          <Input name="whatsapp" label="Whatsapp"/>

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="dubject" label="Matéria"/>
          <Input name="cost" label="Custo da sua hora aula"/>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherFrom;