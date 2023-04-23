import React, { useEffect, useState } from 'react';
import './Home.css'
import TaskData from './TaskData'
import {addTask, getAllTasks,deleteTask} from '../utils/HandleApi'

function Home(props) {
    let [items, setItems] = useState([]);
    let [text, setText] = useState("")

    useEffect(()=>{
      getAllTasks(setItems)
    },[])


    
    let [time, setTime] = useState({s:0,m:0,h:0});
    let [interv, setInterv] = useState();
    let [status, setStatus] = useState(0);
 

    let start= ()=>{
        run();
        setStatus(1);
        setInterv(setInterval(run, 1000));
    }

    let updatedS=time.s, updatedM=time.m, updatedH=time.h;
    let run = ()=>{
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        updatedS++;
        return setTime({s:updatedS, m:updatedM, h:updatedH});
    }

    let stop=()=>{
        clearInterval(interv);
        items.append(time);
        setStatus(1);
        setStatus(0);
        setTime({s:0, m:0, h:0})
    }


    return (
        <div>
            <div className='Home'>
            <input type="text" placeholder='What are you working on?' className='input' value={text} onChange={(e)=>setText(e.target.value)}></input>
            <span id="stopwatch">{(time.h<10)? "0"+time.h : time.h}:{(time.m<10)? "0" + time.m : time.m}:{(time.s<10)? "0" +time.s : time.s}</span><br/>
            {(status === 0)?
                <button onClick={start} className='buton' >Start</button> : ""
            }
            {(status === 1)?
              <button onClick={()=>addTask(time,setTime,text,setText,setItems,stop())} className='buton'>Stop</button> : ""
            }
            </div>
            <ol>
            {
                items.map((itemval, index) => {
                  return <TaskData
                    text = {itemval.text}
                    key={itemval._id}
                    deleteTask={()=>deleteTask(itemval.text,itemval._id,setItems)}
                  />
                })}
              </ol>
        </div>
    )
}
export default Home;