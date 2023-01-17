import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

// const ppl=["Tabasum","Jasmin","Alisha","Ameera"]

const users=[
  {
    pic:"https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Tabasum"
  },
  {
    pic:"https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Jasmin" 
  },
  {
    pic:"https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Alisha"
  },
  {
    pic:"https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600",
      name:"Ameera"
  }
]

  return (
    <div className="App">
<h1>using counter like button</h1>
<Counter/>
<Dislike/>

<h1>Array of objects</h1>
{users.map((usr)=>(
  <Msg name={usr.name} pic={usr.pic}/>
))}
      {/* <h1>USing Map</h1> */}
{/* {ppl.map((person)=>(<Welcome name={person}/>
))} */}

{/* <h1>Hello Morning without using map</h1>
<Welcome name={ppl[0]}/>
<Welcome name={ppl[1]}/>
<Welcome name={ppl[2]}/> */}
      {/* <Msg
      pic="https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600"
      name="Tabasum"
      />
       <Msg
      pic="https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600"
      name="Jasmin"
      />
       <Msg
      pic="https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600"
      name="Alisha"
      /> */}
      
    </div>
  );
}

function Counter()
{
  // let like=0;
  const[like,setLike]=useState(0)

  return(
    <div>
      <button onClick={()=>setLike(like+1)}>👍-{like}</button>
    </div>
  );
}

function Dislike()
{
  const[dislike,setDislike]=useState(0)
  return(
    <div>
      <h1>Unlike</h1>
      <button onClick={()=>setDislike(dislike+1)}>👎-{dislike}</button>
    </div>
  )
}

function Welcome({name,pic}){
  return(
    <div>
      <h1>{name}😊😊😊 </h1>
      <img className='profile-pic'src="https://images.pexels.com/photos/341013/pexels-photo-341013.jpeg?auto=compress&cs=tinysrgb&w=600" alt={name}/>
    </div>
  )
}

function Msg({pic,name}){
  return(
    <div>
      <img className='profile-pic' src={pic} alt={name} />
      <h1>hello {name}</h1>
    </div>
  )
}

export default App;
