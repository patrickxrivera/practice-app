import React, { Component } from 'react';
import { Wrapper, ErrorMessage, TextWrapper, Board, Text } from './styles';

const renderSuccess = ({ _this, that, fetchPair }) => (
  <TextWrapper>
    <Text>Wait, what does your startup do?</Text>
    <Text>So, basically it's like a</Text>
    <Text main>{_this}</Text>
    <Text>for</Text>
    <Text main>{that}!</Text>
    <button onClick={fetchPair}>Refresh</button>
  </TextWrapper>
);

const renderError = (error) => <ErrorMessage>{error}</ErrorMessage>;

const App = ({ error, ...rest }) => (
  <Wrapper>
    <Board>{error ? renderError(error) : renderSuccess(rest)}</Board>
  </Wrapper>
);

export default App;
