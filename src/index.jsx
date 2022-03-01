import React from "react"
import Button from  '@material-ui/core/Button';
import IndexContext from './context/context'



function AppIndex(){
    const handleClick = () => {
        console.log("teste")
    }
    return(
        <div className="App">
      <header>
        <nav>
        <a>oi</a>
        <li>
        <Button
        onClick={handleClick}
        >
        Dashboard
      </Button>
        </li>
        

         
        </nav>
      </header>
    </div>
    )
}
export default AppIndex;