import React, {useState, useEffect} from "react";

const ToDoApi2 = () => {
    const apiUrl = ["https://playground.4geeks.com/apis/fake/todos/user/criscasanovas"]
    const [inputTask, setInputTask] = useState ("")
    const [list, setList] = useState ([])
      
    function createUser(){
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([])
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }

    function deleteAll(){
        fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(data => {
            setList([]);
            createUser()
        })
        }

        function deleteOne(index){
            const deleteTask = list.filter( (item,i) => index !== i );
            fetch(apiUrl, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(response => response.json())
            .then(data => {
                setList(deleteTask);
                createUser()
            })
            }
   
    const getAllTask = async () => {
        try {
            const response = await fetch (apiUrl);
            if (response.ok){
                const data = await response.json();
                console.log(data);
                setList (data);
            }
            else {
                if (response.status === 404) {
                    console.log("usuario no encontrado");
                    createUser();
                }
            }   
        }
        catch (error) {
            console.error
        }
    }

    const addTask = async (value) => {
        try {
            const newTask = {
                label: value,
                done: false,
            };
            const updatedTask = [...list, newTask];
            const putOptions = { 
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify (updatedTask)
            };
            const putResponse = await fetch (apiUrl, putOptions);
            if (putResponse.ok) {
                setInputTask ("");
                getAllTask();
            }
            else {
                console.error ("error al agregar");
            }
        }
        catch (error) {
            console.error ("error al agregar tarea", error)
        }
    }
     
        //useEffect (() => {
        //    getAllTask();
        //},[])

	return (
        <>
		<div className="container">
           
            <button onClick={getAllTask}>Bring List</button>
            <button onClick={deleteAll}>Delete All</button>
                        
			<ul>
                <li>
                    <input type="text" placeholder="Remember to do..."
                    onChange={(e)=>setInputTask(e.target.value)}
                    value={inputTask}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { 
                            addTask(inputTask);
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
                        onClick={()=>deleteOne(index)}>
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