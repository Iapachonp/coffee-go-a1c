
import React from 'react';

export default function Dropdown(props){

  let dataDropDown = props.data.map((d) =>     
    <option value={d[props.keyId]}>{d[props.keyName]}</option>
  );

  return dataDropDown
};
