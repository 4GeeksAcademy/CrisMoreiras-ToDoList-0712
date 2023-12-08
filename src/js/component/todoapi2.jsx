import React, {useState, useEffect} from "react";

const ToDoApi2 = () => {

    const [inputToDo, setInputToDo] = useState ("")
    const [listToDo, setListToDo] = useState([])

    const [list, setList] = useState ([])
    const [task, setTask] = useState ([])
    
   
    function getList(){
        //console.log("getList")
        fetch("https://playground.4geeks.com/apis/fake/todos/user/criscasanovas")
        .then((response)=>response.json())
        .then((data)=> setList(data))    
        }

    function createTask (){
        fetch('https://playground.4geeks.com/apis/fake/todos/user/criscasanovas', {
            method: "PUT",
            body: JSON.stringify(todos),
            headers: {
            "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        setTask(data)
        //console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        //manejo de errores
        console.log(error);
    });
    }
        

	return (
		<div className="container">
            <h1>My To Do List</h1>
            <button onClick={getList}>Bring List</button>
             
			<ul>
                <li>
                    <input type="text" placeholder="Remember to do..."
                    onChange={(e)=>setTask(e.target.value)}
                    value={task}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { 
                            setList(list.concat(task))
                            setTask(""); }
                            }}>
                    </input>
                </li>

                {list.map((item, index) => (

                    <li>
                        <div className="form-check form-check-inline float-start">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault"></label>
                        </div> 

                            <button type="button" className="border border-0 float-end"
                            onClick={() => setList(list.filter((t,currentIndex) => index != currentIndex))
                            }>
                            🗑️
                            </button> 

                            {list.map((item)=> <p>{item.label}</p>)}                 
                        
                    </li>
                ))}       
            </ul>
            <p>{list.length} tasks.</p>
		</div>
	);
};


export default ToDoApi2;