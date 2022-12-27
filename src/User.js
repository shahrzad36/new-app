import React from "react";

import "./User.css";

function User({name, age, height}){
 // let {name, age, height} = props = props destructuring
    return(  
            <div className="container">
             <p>name : {name}</p>
             <p>name : {age}</p>
             <p>name : {height}</p>
          </div>
    );
}




    export default User