import React,{useState} from 'react';
import Box from './component/Box';
import './App.css';

const choice ={
  rock:{name:"Rock", img:"images/rock.png"},
  scissors:{name:"Scissors", img:"images/scissors.png"},
  paper:{name:"Paper", img:"images/paper.png"}
}

const App = () => {
  const [useSelect, setUserSelect] =useState(null);
  const [computerSelect, setComputerSelect] =useState(null);
  const [result, setResult] =useState('')

  const play=(userChoice)=>{
    // console.log(userChoice)
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice))
  }
  const randomChoice =()=>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  }
  const judgement =(user, computer)=>{
    console.log("user",user,"computer",computer)
    if(user.name === computer.name){
      return 'tie';
    }else if(user.name ==="Scissors")
       return computer.name ==="Paper" ? "win" : "lose";
     else if(user.name ==="Rock")
      return computer.name ==="Scissors" ? "win" : "lose";
     else if(user.name ==="Paper")
      return computer.name ==="Rock" ? "win" : "lose";
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={useSelect} result={result}></Box>
        <Box title="Computer" item={computerSelect} result={result}></Box>
      </div>
      <div className="main">
        <img src="images/scissors-1.png" onClick={()=>play("scissors")} />
        <img src="images/rock-1.png" onClick={()=>play("rock")} />
        <img src="images/paper-1.png" onClick={()=>play("paper")} /> 
      </div>
   </div>

  )
}

export default App;
