
const headers = new Headers();
headers.append("Content-type", "application-json");
const requestOptions = {
  method: "GET", 
  headers: headers
}

export let coffees = await fetch(`/listCoffees`, requestOptions)
  .then((response)=> response.json())
  .then( (data) => {
    return data;
  } )
  .catch(err=> {
    console.log(err)
  });
