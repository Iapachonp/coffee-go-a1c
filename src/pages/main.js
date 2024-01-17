import '../App.css';
import { Fragment, useState } from 'react';
import Choices from '../components/choices';
import Content from '../components/content';
import { AppContext } from '../context/app-context';

function App(props) {
  const [choice, setChoice] = useState("Home")
  const value = { choice, setChoice}; 
  return (
    <Fragment>
      <AppContext.Provider value={value}>
      <Choices />
      <Content /> 
      </AppContext.Provider>
    </Fragment>
  );
}

export default App;

