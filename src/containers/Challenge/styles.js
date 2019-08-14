import styled from 'styled-components';
import media from 'styled-media-query';

export const Text = styled.span`
  font-size: 0.85em;
  color: #1565c0;
`;

export const Input = styled.input`
  border-style: none;
  border-bottom: 2px solid #1565c0;
  background: transparent;
  outline: none;
  font-size: 1.8em;
  color: #fff;
  padding: 0 10px;
  margin: 25px 10px;

  ${media.lessThan('small')`
    font-size: 1.3em;
  `};
`;

export const Content = styled.div`
  padding: 0 8%;
  min-height: 100vh;
`;
