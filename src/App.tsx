import React from 'react';
import './App.css';
import Todolist from "./Todolist";

export type PropsType = {
    title: string
    tasks: Array<TaskType>
}

type TaskType={
    id:number
    title:string
    isDone: boolean
}

function   App() {

    const tasks1: Array<TaskType> = [
        {id:1, title:"HTML", isDone:true},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"ReactJS", isDone:false},
    ]
    const tasks2: Array<TaskType>  = [
        {id:1, title:"Hello word", isDone:true},
        {id:2, title:"I am happy", isDone:true},
        {id:3, title:"Yo", isDone:false},
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Songs" tasks={tasks2}/>
        </div>
    );
}

export default App;
