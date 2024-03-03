import { createContext, useState } from "react";
import { CookiesProvider, useCookies } from 'react-cookie';

export const AppContext = createContext({ 
});

export const AppContextProvider = (props) => {

  const setjwtToken = (jwtToken) => {
    setCookie('jwtToken', jwtToken, { path: '/'})
    setState({...state, jwtToken: cookies.jwtToken})
  }
  const unSetjwtToken = () => {
    removeCookie('jwtToken',{ path: '/'})
    setState({...state, jwtToken: ""})
  }
  const setChoice = (choice) => {
    setState({...state, choice: choice})
  }
  const setAlertMessageClassname = (alertMessage, alertClassname) => {
    setState({...state, alertMessage: alertMessage, alertClassname: alertClassname})
  }  
  const jwtTokenCookie = useCookies(['jwtToken']) 
  const [cookies, setCookie, removeCookie] =jwtTokenCookie 

  const initState = {
    jwtToken: (cookies.jwtToken === undefined ? "" : cookies.jwtToken),
    setjwtToken: setjwtToken,
    unSetjwtToken: unSetjwtToken,
    alertMessage: "",
    alertClassname: "d-none",
    setAlertMessageClassname:setAlertMessageClassname,
    choice: "Home",
    setChoice: setChoice
    
  }
  const [state, setState] = useState(initState)
  return (
  <AppContext.Provider value={state}>
      {props.children}
  </AppContext.Provider>
  ) 
}

