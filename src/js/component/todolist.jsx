import React, {useState} from "react";

const ToDo = () => {

    const [inputToDo, setInputToDo] = useState ("")
    const [lisToDo, setListToDo] = useState([])

	return (
		<div className="container">
			<ul>
                <h1>My To Do List</h1>
                <li>
                    <input type="text" placeholder="Remember to do..."
                    onChange={(e)=>setInputToDo(e.target.value)}
                    value={inputToDo}
                    onKeyDown={(e)=> e.key="Enter" setListToDo(lisToDo.concat(inputToDo)) : null}>
                    </input>
                </li>
                <li>
                    
                </li>
            </ul>
		</div>
	);
};


export default ToDo;