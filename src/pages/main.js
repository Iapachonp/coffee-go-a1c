import '../App.css';
import { Fragment, useState } from 'react';
import Choices from '../components/choices';
import Content from '../components/content';
import { AppContextProvider, AppContext } from '../context/app-context';
import { useContext } from 'react';

function App(props) {
  const ctx = useContext(AppContext)  
  return (
    <Fragment>
      <AppContextProvider>
      <Choices />
      <Content /> 
      </AppContextProvider>
    </Fragment>
  );
}

export default App;

