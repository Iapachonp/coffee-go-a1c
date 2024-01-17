


export const choices ={
  Home: {
    name: "Home",
    badge: "Specialty"
  },
  Coffees: {
    name: "Coffees",
    badge: "YUJU"
  },
  Shop: {
    name: "Coffees",
    badge: "YUJU"
  },
  Help: {
    name: "Coffees",
    badge: "YUJU"
  },
}

export function get_badge (choice) {
  return (choices[choice].badge)
} 
