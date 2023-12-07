import React from "react";


//create your first component
const Test = () => {

    function traertareas (){
        console.log (traertareas)
        fetch("https://playground.4geeks.com/apis/fake/todos/user/criscasanovas")
        .then((response)=>response.json())
        .then((list)=>console.log(list))
    }

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">TEST!</h1>
            <button onClick={traertareas}>Traer Tareas</button>
		</div>
	);
};

export default Test;