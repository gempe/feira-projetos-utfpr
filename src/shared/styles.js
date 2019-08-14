import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  text-align: center;

  ${media.lessThan('medium')`
    padding: 15px;
  `};
`;

export const H1 = styled.h1`
  color: #1565c0;
  font-size: 3.5em;

  ${media.lessThan('medium')`
    text-align:center;
    font-size: 3em;
  `};

  ${media.lessThan('small')`
    font-size: 2em;
  `};
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 2.5em;

  ${media.lessThan('medium')`
    text-align:center;
    font-size: 2em;
  `};

  ${media.lessThan('small')`
    font-size: 1.3em;
    text-align: center;
  `};
`;

export const Shine = styled.span`
  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    transition: all 0.8s ease 0s;
  }
`;

export const Button = styled.button`
  background-color: #1565c0;
  border: 0px;
  width: ${props => (props.width ? props.width : '200px')};
  min-height: 35px;
  color: #fff;
  font-size: 2em;
  border-radius: 4px;
  display: ${props => (props.display ? props.display : 'inline-block')};
  padding: 5px 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  &:hover {
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;

    text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }

  ${media.lessThan('small')`
    font-size: 1.4em;
    width: ${props => (props.width ? props.width : '150px')};
  `};
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'column')};
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;
