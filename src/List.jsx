import React from 'react'

const List = ({items, date, del}) => {
    const listem=items.map((item)=>{
        return (
            <div key={item.id} className='saq'>
                <input type="text" className='lol' value={item.text} id={item.key} onInput={(e)=>date(e.target.value, item.key)}  
                /><span className='kiy' onClick={()=>del(item.key)}>DELETE</span>
            </div>
        ) 
    })
  return (
    <div className='bil'>
    {listem}


    </div>
  )
}

export default List