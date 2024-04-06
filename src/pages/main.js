import '../App.css';
import { Fragment, useState } from 'react';
import Content from '../components/content';
import Contact from '../components/contact';
import { AppContextProvider, AppContext } from '../context/app-context';
import { useContext } from 'react';

function App(props) {
  const ctx = useContext(AppContext)  
  return (
    <Fragment>
      <AppContextProvider>
      <Content />
      </AppContextProvider>
    </Fragment>
  );
}

export default App;

