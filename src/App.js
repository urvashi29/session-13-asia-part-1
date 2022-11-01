import React from 'react';
import { Large, Red } from './stories/Button.stories';
import { Header } from './stories/Header';
import { Number } from './stories/Input.stories';
import { Display } from './Display';

const App = () => {

  const handleClick = () => {
    alert('hello');
  }

  const handleChange = () => {

  }
  return (
    <>
      <Header user />
      <Large label="login" onClick={handleClick} backgroundColor={'blue'} primary />
      <Red label="logout" backgroundColor={'red'} />
      <Number label="Age" onChange={handleChange} placeholder="Please enter age" />
      <Display />
    </>
  );
}

export default App;



