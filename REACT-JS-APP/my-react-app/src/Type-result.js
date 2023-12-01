
import React from 'react';
import './index.css'

function TypeResult(props){
    return <>  
    <li className='listname shadow-lg col-sm-6 text-center p-2 my-2'>{props.value}</li>
    <button className='btn btn-danger btn-sm shadow-lg col-sm-2 m-2'
    onClick={()=>{props.delete(props.id)}} >X</button>
    </>

     
}
export default TypeResult;