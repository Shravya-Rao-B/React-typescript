import { useState } from 'react'
import './App.css'
import { Greet } from "./components/Greet";
import {Person } from "./components/Person";
import {PersonList} from "./components/PersonList";
import { Status } from "./components/Status";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import { Container } from './components/Container';
import {PersonImportType} from './components/PersonImportType'
import {PersonListImportType} from './components/PersonListImportType';
import {LoggedIn} from './components/state/LoggedIn';
import {User} from './components/state/User';
import {Counter} from './components/state/Counter';
import {CounterClass} from './components/class/Counter';
//On hovering on App, typescript tells us that App is of type function. This is called type inference.
function App() {
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
      {/* <Button handleClick={() => {console.log("Button clicked")}}/> */}
      <Button handleClick={(event, id) => {console.log("event", event, id)}}/>
      <Input value="" handleChange={(event) => {console.log(event)}}/>
      <Container styles={{border : "1px solid" , padding: "20px"}}/>
      <p>--------------------------------------With types imported------------------------------------</p>
      <PersonImportType name={name} />
      <PersonListImportType names ={listOfNames} />
      <p>--------------------------------------USe State with ts---------------------------------------</p>
      <LoggedIn />
      <p>--------------------------------------Dynamic State value---------------------------------------</p>
      <User />
      <Counter />
      <p>--------------------------------------With Class Component--------------------------------------</p>
      <CounterClass />
    </div>
  )
}


export default App
