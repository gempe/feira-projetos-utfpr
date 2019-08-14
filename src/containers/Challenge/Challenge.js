import React from 'react';

import { Text, Input } from './styles';
import {
  H2, Flex, Button, Container,
} from '../../shared/styles';

const Challenge = () => (
  <Container>
    <H2>
      Basta preencher e enviar o formuláro,
      <Text> se for capaz...</Text>
    </H2>
    <Flex>
      <Input type="text" placeholder="Seu Nome" />
      <Input type="text" placeholder="Seu Email" disabled />
      <Button display="none" width="100%">
        Enviar
      </Button>
    </Flex>
  </Container>
);

export default Challenge;
