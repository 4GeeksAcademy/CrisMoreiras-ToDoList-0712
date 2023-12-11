import React, {useState, useEffect} from "react";

const ToDoApi2 = () => {

    const [inputTask, setInputTask] = useState ("")
    const [list, setList] = useState ([])
    const [task, setTask] = useState ([])
    
   
   
    function getList(){
        //console.log("getList")
        fetch("https://playground.4geeks.com/apis/fake/todos/user/criscasanovas")
        .then((response)=>response.json())
        .then((data)=> {
            setList(data);
            setTask(data.map(item => item.label));
        })};    

        function newTask(){

            
            fetch("https://playground.4geeks.com/apis/fake/todos/user/criscasanovas"), {
                method: "PUT",
                body: JSON.stringify(allTasks),
                headers: {"Content-Type": "application/json"},
            }
            .then((response)=>response.json())
            .then((data)=> {
                setList(data);
                setInputTask(data.map(item => item.label));
        })};    
          
        

	return (
        <>
		<div className="container">
           
            <button onClick={getList}>Bring List</button>
             
			<ul>
                <li>
                    <input type="text" placeholder="Remember to do..."
                    onChange={(e)=>setInputTask(e.target.value)}
                    value={inputTask}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { 
                            setList(list.concat(inputTask))
                            setInputTask(""); }
                            }}>
                    </input>
                </li>

                {list.map((item, index) => (

                    <li>
                        <div className="form-check form-check-inline float-start" >
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault"></label>     
                        </div> 
                        <p>{item.label}</p>
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
        </>
	); 
};



export default ToDoApi2;