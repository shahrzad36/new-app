import React from "react";

import "./User.css";

function User( props){
    return(  
            <div className="container">
             <p>name : {props.name}</p>
             <p>name : {props.age}</p>
             <p>name : {props.height}</p>
          </div>
    );
}




    export default User