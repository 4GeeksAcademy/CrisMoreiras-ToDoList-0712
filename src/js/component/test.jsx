import React, {useState, useEffect} from "react";


//create your first component
const Test = () => {
    
    const [list, setList] = useState ([])
   

    function getList(){
        console.log("getList")
        fetch("https://playground.4geeks.com/apis/fake/todos/user/criscasanovas")
        .then((response)=>response.json())
        .then((data)=> setList(data))    
        }
        
    //useEffect (()=>{
        //console.log ("cargo componente")
        //getList()
    //},[])

    function creartarea (){
        console.log (creartarea)

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([])
        };

        fetch("https://playground.4geeks.com/apis/fake/todos/user/criscasanovas2",requestOptions)
        .then((response)=>response.json())
        .then((data)=>console.log(data))
    }

	return (

		<div className="text-center">
			<h1 className="text-center mt-5">TEST!</h1>
            <button onClick={getList}>Bring List</button>
            <button onClick={creartarea}>Crear Tarea</button>
            {list.map((item)=> <p>{item.label}</p>)}  
		</div>
	);
};

export default Test;