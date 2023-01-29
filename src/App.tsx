import { useState } from 'react'
import './App.css'
import { Greet } from "./components/Greet";
import {Person } from "./components/Person";
import {PersonList} from "./components/PersonList";
import { Status } from "./components/Status";
import {Button} from "./components/Button";

//On hovering on App, typescript tells us that App is of type function. This is called type inference.
function App() {
  const [count, setCount] = useState(0)
  const name = {
    first: "Shravya",
    last :"Rao"
  };
  const listOfNames = [
    {
    first: "Shravya",
    last :"Rao"
    },
    {
      first: "Shruthi",
      last :"Rao"
      },
    ]

  return (
    <div className="App">
      <Greet name="Shravya" messageCount={20} isLoggedIn={true}/>
      <Person name={name} />
      <PersonList names={listOfNames}/>
      <Status status="error"/>
      <Button handleClick={() => {console.log("clicked")}}/>
    </div>
  )
}


export default App
