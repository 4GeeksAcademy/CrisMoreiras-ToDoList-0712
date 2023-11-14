import React, {useState} from "react";


const ToDo = () => {

    const [inputToDo, setInputToDo] = useState ("")
    const [listToDo, setListToDo] = useState([])

	return (
		<div className="container">
			<ul>
                <h1>My To Do List</h1>
                <li>
                    <input type="text" placeholder="Remember to do..."
                    onChange={(e)=>setInputToDo(e.target.value)}
                    value={inputToDo}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { 
                            setListToDo(listToDo.concat(inputToDo))
                            setInputToDo(""); }
                            }}>
                    </input>
                </li>

                {listToDo.map((item, index) => (

                    <li>
                        
                        {item}{""}

                        <a onClick={() => setListToDo(listToDo.filter((t,currentIndex) => index != currentIndex))
                        }>
                            🗑️
                        </a>                
                            
                    </li>

                ))}       
            </ul>
            <div>{listToDo.length} tasks.</div>
		</div>
	);
};


export default ToDo;