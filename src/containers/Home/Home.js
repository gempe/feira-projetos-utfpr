/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container, H1, H2, Button, Shine,
} from '../../shared/styles';

const Home = () => (
  <Container>
    <H1>Curte desafios?</H1>
    <H2>
      Mostre que você é um Dev
      <Shine>🔪💀.</Shine>
    </H2>
    <Link to="/desafio">
      <Button type="button">Iniciar</Button>
    </Link>
  </Container>
);

export default Home;
