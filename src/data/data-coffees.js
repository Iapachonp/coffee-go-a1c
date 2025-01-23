
const headers = new Headers();
headers.append("Content-type", "application-json");
const requestOptions = {
  method: "GET", 
  headers: headers
}

export let coffees = await fetch(`/coffees`, requestOptions)
  .then((response)=> response.json())
  .then( (data) => {
    return data;
  } )
  .catch(err=> {
    console.log(err)
  });


export let varietals = await fetch(`/varietals`, requestOptions)
  .then((response)=> response.json())
  .then( (data) => {
    return data;
  } )
  .catch(err=> {
    console.log(err)
  });

export let farmers = await fetch(`/farmers`, requestOptions)
  .then((response)=> response.json())
  .then( (data) => {
    return data;
  } )
  .catch(err=> {
    console.log(err)
  });

export let origins = await fetch(`/origins`, requestOptions)
  .then((response)=> response.json())
  .then( (data) => {
    return data;
  } )
  .catch(err=> {
    console.log(err)
  });
