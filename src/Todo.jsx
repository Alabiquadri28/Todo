import React, { Component } from 'react'
import List from './List'
import Intro from './Intro'


export class Todo extends Component {
  constructor(props){
    super (props)
    this.state={
      items:[],
      cout:{
        text:"",
        key:""
      }
    }
  }

  input=(e)=>{
   this.setState({cout:{
     text:e.target.value,
     key:new Date()
   }})
   console.log(this.state.cout)
  }
  submit=(e)=>{
    e.preventDefault()
    let sam=this.state.cout
    if(sam.text!==""){
      const sammy=[...this.state.items, sam]
      this.setState({
        items:sammy,
        cout:{
          text:"",
          key:""
        }
      })
    }
   

  }
  date=(text, key)=>{
    const items=this.state.items
    items.map((item)=>{
      if(item.key==key){
        item.text=text
      }
      this.setState({items:items})
    })
  }

   del=(key)=>{
     const fil=this.state.items.filter((item)=>item.key !==key)
     this.setState({items:fil})

  }
  
 

  render() {
    return (
     <>
      <div className='pop'>
        <div className='line'></div>
      <form onSubmit={this.submit}  >
        <div className='sero'></div>
   <input className='ala' type="text" placeholder='Enter New Task....' value={this.state.cout.text} onInput={this.input} />
   <input className='afi' type="submit" value="+" />
       

      </form>

    {this.puy}
    <List items={this.state.items} 
  
  date={this.date}

   del={this.del}/>

      </div>
        <Intro/>
     </>
    )
  }
}

export default Todo