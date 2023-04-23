import axios from 'axios'

const baseURL = "https://screen-app-backend.onrender.com"

const getAllTasks = (setTask)=>{
    axios.get(baseURL)
    .then(({data})=>{
        console.log('data--->',data);
        setTask(data)
    })
}

const addTask = (text, setText, SetItems,stop)=>{
    axios.post(`${baseURL}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        stop()
    })
}

const deleteTask = (text, taskId, setItems)=>{
    axios.post(`${baseURL}/delete`,{_id:taskId, text})
    .then((data)=>{
        console.log(data)
        getAllTasks(setItems)
    })
    .catch((err)=>console.log(err))
}

export {getAllTasks,addTask,deleteTask}