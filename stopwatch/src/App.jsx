import { useEffect, useState } from 'react'
import './App.css'
export default function App() {
  const [timer,setTimer] = useState(0);
  const [toggle,setToggle] = useState(false);

  useEffect(()=>{
    let timer;
    if(toggle){
      timer = setInterval(()=>{
        setTimer((prevTime)=>prevTime+1);
      },1000)
    }else{
      clearInterval(timer)
    }
    return ()=>{
      clearInterval(timer);
    }
  },[toggle])

  const formatTime = (totalSeconds) =>{
    const hours = Math.floor(totalSeconds/3600);
    const minutes = Math.floor((totalSeconds%3600)/60);
    const seconds = totalSeconds%60;

    const formattedTime = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    return formattedTime;
  }
  const handleClick= ()=>{
    setToggle(!toggle);
  }
  const handleReset = ()=>{
    setToggle(false);
    setTimer(0);
  }
  return (
    <div className="main">
       <h2 className="heading">Stopwatch</h2>
       <div className="timer">{formatTime(timer)}</div>
       <button onClick={handleClick} className='btn'>{toggle?'Stop':'Start'}</button>
       <button onClick={handleReset} className='btn'>Reset</button>
    </div>
  )
}
