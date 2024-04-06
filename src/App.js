import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {
  const [Title, setTtile] = useState(props.Title)
  return (
      <div>
        <h2 className="text-white bs-light bs-light-text-emphasis"> {Title} <span className="badge bg-secondary">{props.badge}</span></h2> 
      </div> 
  );
}

export default App;
