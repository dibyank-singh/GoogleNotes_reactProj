import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';




const Itemcomp = (props) => {

const[crossline , setCrossline]=useState(false)

    const Deteitem=()=>{
    
        setCrossline(true)
    }
    return (
        <>
        <div className="styllist">
        <span onClick={Deteitem} className="dltstyle">< DeleteIcon style={{fontSize:30}}/></span>
        <li style={{textDecoration : crossline ? "line-through" :"none",  fontSize:21 , color:"rosybrown" , textTransform:"capitalize"}}>{props.data}</li>
        </div>
        </>
    );
}

export default Itemcomp ;
