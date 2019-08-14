import styled from 'styled-components';
import media from 'styled-media-query';

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

export const Image = styled.img`
  max-width: 100%;
  margin-top: 20px;
  padding-right: 38px;
`;
