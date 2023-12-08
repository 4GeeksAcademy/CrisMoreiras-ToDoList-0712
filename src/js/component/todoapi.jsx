import React, {useState, useEffect} from "react";

const ToDoApi = () => {

    const [inputToDo, setInputToDo] = useState ("")
    const [listToDo, setListToDo] = useState([])

    const [list, setList] = useState ([])
   
    function getList(){
        console.log("getList")
        fetch("https://playground.4geeks.com/apis/fake/todos/user/criscasanovas")
        .then((response)=>response.json())
        .then((data)=> setList(data))    
        }

	return (
		<div className="container">
            <h1>My To Do List</h1>
            <button onClick={getList}>Bring List</button>
             
			<ul>
                <li>
                    <input type="text" placeholder="Remember to do..."
                    onChange={(e)=>setInputToDo(e.target.value)}
                    value={inputToDo}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { 
                            setList(list.concat(inputToDo))
                            setInputToDo(""); }
                            }}>
                    </input>
                </li>

                {list.map((item, index) => (

                    <li>
                        <div className="form-check form-check-inline float-start">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault"></label>
                        </div>
                        
                        {list.map((item)=> <p>{item.label}</p>)}  

                            <button type="button" className="border border-0 float-end"
                            onClick={() => setList(list.filter((t,currentIndex) => index != currentIndex))
                            }>
                            🗑️
                            </button>                 
                        
                    </li>
                ))}       
            </ul>
            <p>{list.length} tasks.</p>
		</div>
	);
};


export default ToDoApi;