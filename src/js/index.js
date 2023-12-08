//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import ToDo from "./component/todolist.jsx";
import Test from "./component/test.jsx";
import ToDoApi from "./component/todoapi.jsx";
import ToDoApi2 from "./component/todoapi2.jsx";



//render your react application
ReactDOM.render(<ToDoApi2 />, document.querySelector("#app"));
