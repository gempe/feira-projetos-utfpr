import React from 'react';

import { Text } from './styles';
import { H2, Flex, Container } from '../../shared/styles';
import Form from '../../components/Form';

const Challenge = () => (
  <Container>
    <H2>
      Basta preencher e enviar o formulário,
      <Text> se for capaz...</Text>
    </H2>
    <Flex>
      <Form />
    </Flex>
  </Container>
);

export default Challenge;
