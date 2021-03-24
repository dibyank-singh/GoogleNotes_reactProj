import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import Itemcomp from '../Itemcomp';

// import ('./note.css')



const Notes = () => {
    
    const [input , setInput]=useState(" ")
    const[item , setItem]=useState([])

  const clickevent=(event)=>{
     
    setInput(event.target.value)
  }
  const btnclick=()=>{
    setItem((prevalue)=>{
       return [...prevalue, input]
    })
    setInput(" ")
  }
    return (
        <>
        <div className="main">
            <div className="snd_main">
             <br/>
             <h2 className="h2sty">Keep Knotes </h2>
             <br/>
             <div className="trd_main">
              <input type="text"  placeholder="Add" value={input} onChange={clickevent}/>
              <Button onClick={btnclick} className="btn" variant="contained" color="primary"> <AddIcon/></Button>
              </div>
              
              <br/>
              <ul>
                   
                    {
                       item.map((val , index)=>{
                         return <Itemcomp
                           key={index}
                            data={val}
                         />
                       })

                    }
                    
                    
              </ul>
              <br/>
            </div>
        </div>
        </>
    )
}

export default Notes;
