import logo from './logo.svg';
import './App.css';

function App() {

const ppl=["Tabasum","Jasmin","Alisha","Ameera"]

  return (
    <div className="App">
      <h1>USing Map</h1>
{ppl.map((person)=>(<Welcome name={person}/>
))}

<h1>Hello Morning without using map</h1>
<Welcome name={ppl[0]}/>
<Welcome name={ppl[1]}/>
<Welcome name={ppl[2]}/>
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
