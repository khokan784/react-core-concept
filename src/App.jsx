import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singer from './singer'

function App() {
  const [count, setCount] = useState(0)
  
  const actors = ['salman', 'rajjak', 'rubel', 'sakib']
  const singers = [
    {id : 1, name : 'balam', age : 30},
    {id : 2, name : 'kona', age : 26},
    {id : 3, name : 'minar', age : 28}
  ]
  return (
    <>
      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }





      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo task='Learn react' isDone = {true}></Todo>
      <Todo task='explore core concept' isDone = {false}></Todo>
      <Todo task='JSX' isDone = {true}></Todo> */}
      <Device name='laptop' price="50000"></Device>
      <Device name='mobile' price='14000'></Device>
      <Person></Person>
      <Student grade='7' score='88'></Student>
      <Student grade='5' score='45'></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Device(props){
  return <h2>This device :{props.name} price : {props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 35
  const person = { name: 'sakib', age: 15 }
  return <h3>I am {person.name}. my age {person.age}</h3>
}
function Student({grade=1,score}) {
  return (
    <div className='student'>
      <h2>This is a student</h2>
      <p>grade: {grade}</p>
      <p>score:{score}</p>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    padding: '20',
    border: '2px solid black',
    borderRadius: '10px'
  }
  return (
<div style={developerStyle}>
  <h2>This is a student</h2>
  <p>name:</p>
  <p>age:</p>
</div>
  )
}


export default App
