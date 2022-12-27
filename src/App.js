import User from "./User.js";
import './App.css'
function App(){
    return(   
    <>
        
          <div className="row">
           <User name= "milad" age = "27" height = "180"/>
           <User name= "samin" age = "23" height = "170"/>
           <User name= "parsa" age = "34" height = "192"/>
          </div>
     
    </>
    );
}

export default App