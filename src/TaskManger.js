import React from 'react'
import { useState, useEffect } from "react";



 const getItem = () => {
     let list = localStorage.getItem('myTodoList');
 //    console.log(typeof list); //string
     if(list){
         return JSON.parse(localStorage.getItem('myTodoList'))
     }else{
         return [];
     }
 }



const TaskManger = () => {

const [input, setInput] = useState("");
const [item, setItem] = useState(getItem());
const [btnName, setbtnName] = useState('Add Task');
const [editId, setEditId] = useState(null);

useEffect(() => {
    localStorage.setItem('myTodoList', JSON.stringify(item));
}, [item])


const add_task = () => {
    if(!input){
        return alert('Plz add item');
    }else if(input && editId){
        setItem(
            item.map((value) => {
                if(value.id === editId){
                    return {...item, name:input};
                }
                return value;
            })
        )
        setInput('');
        setEditId(null);
        setbtnName('Add Task');
    }
    else{
        let myitem = { id:new Date().getTime().toString(), name:input }
        setItem([...item, myitem]);
        setInput("");
     
    }
}

const editItem = (id) => {
    setbtnName("Edit Task");
    console.log(id);
    let editedItem = item.find((elem) => {
        return elem.id === id
    })
    console.log(editedItem);
    setInput(editedItem.name);
    setEditId(editedItem.id);
}


const deleteItem = (id) => {
    console.log(id);
    const updateData = item.filter((val) => {
        return val.id !== id;
    });
    setItem(updateData);
}

return (
     <div className="mainsection">
        <h2>Task Manager</h2>
        <input type="text" placeholder="Add Task" onChange={(e) => setInput(e.target.value)} value={input} />
        <div className="task_btns">
            <button onClick={add_task}>{btnName}</button>
            <span> </span>
            <button>Clear Task</button>
        </div>
        <div className="result_div">
            {
                item.map((elem, index) => {
                    return(
                    <div key={index}>
                        <p>{elem.name}</p>
                        <span>
                            <span onClick={() => editItem(elem.id)}><i className="far fa-edit"></i></span>
                            <span onClick={() => deleteItem(elem.id)}><i className="far fa-trash-alt"></i></span>
                        </span>
                    </div>        
                    )                    
                })
            }
        </div>
    </div>
    )
}

export default TaskManger
