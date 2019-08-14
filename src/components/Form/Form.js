import React, { useState } from 'react';

import { notification, Modal } from 'antd';
import 'antd/dist/antd.css';

import { Input, Image } from './styles';
import { Button } from '../../shared/styles';
import sucess from '../../assets/sucess.gif';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameInput = event => setName(event.target.value);
  const handleEmailInput = event => setEmail(event.target.value);
  const sendUserToForm = () => window.location.replace('https://deudesconto.typeform.com/to/FTn3yl');

  const validForm = () => {
    if (name === '' || email === '') {
      notification.error({
        message: 'Formulário inválido',
        description: 'Preencha todos os campos.',
      });
      return;
    }

    Modal.success({
      centered: true,
      title: 'Boa Dev!!! Quer enfrentar desafios de verdade agora? Vem pra Gempe!',
      content: (
        <div>
          <Image src={sucess} alt="logo" />
        </div>
      ),
      okText: 'Quero fazer parte do time Gempe',
      onOk() {
        sendUserToForm();
      },
      onCancel() {
        sendUserToForm();
      },
    });
  };

  return (
    <>
      <Input value={name} onChange={handleNameInput} type="text" placeholder="Seu Nome" />
      <Input
        value={email}
        onChange={handleEmailInput}
        type="text"
        disabled
        placeholder="Seu Email"
      />
      <Button onClick={validForm} display="none" width="100%">
        Enviar
      </Button>
    </>
  );
};

export default Form;
