import './App.css';
import './index.css'
import TypeResult from './Type-result';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import React, { Component } from 'react'

export default class App extends Component {
state ={
  item:[],
  text:''
}
handlechange=(event)=>{
  this.setState({text:event.target.value});
}
handleadd=(event)=>{
  if (this.state.text !== ""){
    const item = [...this.state.item , this.state.text];
    this.setState({item:item , text:''});
    
  }
}

handleDelete=id=>{
  console.log("delete calling");
  const Olditem = [...this.state.item];
const item = Olditem.filter((element,i)=>{
 return i !==id; 
})
  this.setState({item:item})
}


  render() {
    return (
      <div className='container-fluid my-5'> 
        <div className='row'>
          <div className='col-6 mx-auto text-white shadow-lg  p-3'>
            <h1 className='text-center'>First React App</h1>
            <div className='row mt-5 mb-3'>
            <div className='col-9 '>
            <input type="text" className="form-control" placeholder="Enter Your thought" 
            aria-label="Example text with two button addons"
            onChange={this.handlechange} />
            </div>
            <div className='col-2'>
            <button className='btn btn-warning' onClick={this.handleadd}>Add</button>
            </div>
            <div className='container-fluid '>
              <ul className='list-unstyled row m-5 col-6'>
                {/* <li>{this.state.item}</li> */}
                
                  {
                    this.state.item.map((value,i)=>{
                       return <TypeResult key={i} id={i} value={value} 
                       delete={this.handleDelete}/>
                    })
                  }
                
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

