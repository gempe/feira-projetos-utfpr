import styled from 'styled-components';
import media from 'styled-media-query';

export const Text = styled.span`
  font-size: 0.7em;
  color: #93303c;
`;

export const Input = styled.input`
  border-style: none;
  border-bottom: 2px solid #1565c0;
  background: transparent;
  outline: none;
  font-size: 1.8em;
  color: #fff;
  padding: 0 15px;
  margin: 25px 10px;

  ${media.lessThan('medium')`
    font-size: 1.3em;
  `};
`;

export const Content = styled.div`
  padding: 0 8%;
  min-height: 100vh;
`;
