import React, {useState} from "react";


const ToDo = () => {

    const [inputToDo, setInputToDo] = useState ("")
    const [listToDo, setListToDo] = useState([])

	return (
		<div className="container">
            <h1>My To Do List</h1>
			<ul>
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
                        <div className="form-check form-check-inline float-start">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault"></label>
                        </div>
                        
                        {item}{""}

                            <button type="button" className="border border-0 float-end"
                            onClick={() => setListToDo(listToDo.filter((t,currentIndex) => index != currentIndex))
                            }>
                            🗑️
                            </button>                 
                        
                    </li>
                ))}       
            </ul>
            <p>{listToDo.length} tasks.</p>
		</div>
	);
};


export default ToDo;