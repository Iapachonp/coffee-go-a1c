
const Alert = (props) => {

  return(
    <div className={"alert " + props.className} label={props.message} role="alert"> 
      {props.message}
    </div>

  )
}
export default Alert;
