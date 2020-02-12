import React from 'react';
import './style.css';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const Root = () => {
  return <Title>Hello, React</Title>;
};

export default Root;
