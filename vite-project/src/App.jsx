import React from 'react';
import './App.css';

import Student from "./Student"
function App() {
  const h1=<h1>hello world</h1>;
const mystyle={
  color:'yellow',
  backgroundColor:'red'

}

const stdata={
  college:"Abesec",
  name:"Yash",
  branch:"Cse",
  section:'B'

}
    return (
      <div style={{backgroundColor:'tomato'}}>
        {h1}
         <div style={mystyle}>
          ABES ENGINEERING COLLEGE
        </div>
        <div style={{display:'flex'}}>
          <Student data={stdata}></Student>
          {/* <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
          <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b"pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
          <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b"pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
          <><Student college="ABES ENGG COLLEGE" name="supriya" branch="cse" section="b"pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></> */}
          
        </div> 
      </div>
        
    );
}

 
export default App;