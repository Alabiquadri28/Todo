import React from 'react'
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import useSound from 'use-sound'
import  {  MdPlayArrow, MdFastForward,  MdFastRewind, MdPause, MdNotInterested, MdLiving } from 'react-icons/md'
import hop from './/stock/ball.jpg'
import sop from './/stock/call.jpg'
import nop from './/stock/mall.jpg'
import oop from './/stock/sall.jpg'
import mo from './/Audio/music_Faded.mp3'
import ko from './/Audio/music_fallingdown.mp3'
import lo from './/Audio/music_Rather Be.mp3'
import bo from './/Audio/music_stay.mp3'
import vop from './/stock/nemag.jpeg'
import { useAudioPlayer } from 'react-use-audio-player'







const Music = () => {



  
    const boss = [
         {
        id:1,
        title : "Artiste",
        music : "no music",
        image : vop
        },
        {
            id:2,
            title : "Alan Walker",
            music : "Faded",
            image : hop
        },
        {
            id:3,
            title : "Lil Peep",
            music : "falling down",
            image : sop
          
        },
        {
           id:4,
            title : "Clean Bandit",
            music : "rather be",
            image : nop
            
        },
        {
            id:5,
            title : "Sam Smith",
            music : "stay",
            image : oop
        
        },

    ]



    const [sow, setSow] =useState(false)
    const [bow, setBow] = useState(true)
    const [list, setList] = useState(boss)
    const [num, setNum]  = useState(0)
    const per = 1
    const visited = num * per
    const dispay =list.slice(visited, visited+per).map((mud)=>{
      return (
        <div key={mud.id}>
           <img className='folly' src={mud.image} alt="" />
                <div className='mob'> {mud.title} </div>
                <div className='bop' > {mud.music} </div>
               
           

           </div>
      )
    })
    const pan =()=>{
      setSow(true)
      setBow(false)
      

    }
    const van =()=>{
      if(sow === true) {
        setBow(true)
        setSow(false)
        
      }
    
    }
   const kop=Math.ceil(list.length/per)
    const slip = ({selected}) =>{
      setNum(selected)
    }



    const [pin, setPin] = useState(mo)
    const [ind, setInd] = useState(0)
    const [lin,setLin] = useState(ko)
    const [gin,setGin] = useState(lo)
    const [sin,setSin] = useState(bo)

    useEffect(()=>{
      setGin(new Audio(gin))
       }, [])
   
       
       useEffect(()=>{
         setSin(new Audio(sin))
         
       }, [])

    useEffect(()=>{
   setLin(new Audio(lin))
    }, [])

    
    useEffect(()=>{
     setPin(new Audio(pin)) 
      
    }, [])

 const fas = () =>{
  if(ind === 0){
  
  
    pin.play()
    
  }
  if(ind === 1){
    gin.play()
    pin.pause()
    
  
    
  }
  if(ind === 2){
    lin.play()
    gin.pause()
  }
if(ind === 3){
  sin.play()
  lin.pause()
}
 
     setInd(ind + 1)

     if(ind === 4){
      setInd(4) 
     setSow(false)
    }

    setSow(true)
 } 

 const saf = () =>{

  
  if(ind == 4){
    sin.pause()
    lin.play()   
  }
  if(ind == 3){
    lin.pause()
    gin.play()
  }
  if(ind == 2){
    gin.pause()
    pin.play()
  }
  if(ind === 1){
    pin.pause()
   // setInd(ind + 1)
    

  }

  setInd(ind - 1)
  setSow(true)
  if(ind === 0){
    setInd(0)
    pin.puase()
  }
    
 }
 

 const dut =()=>{
  if(ind === 1){
    pin.play()

  }

  if(ind == 2){
  gin.play()
   }
  if(ind == 3){
  lin.play()
  } if(ind == 4){
  sin.play()
  }
}

  const tub = () =>{

    if(ind == 1){
      pin.pause()
    }
    if(ind == 2){
      gin.pause()
    }
    if(ind == 3){
      lin.pause()
    } if(ind == 4){
      sin.pause()
    }
  }

  
  
  return (
    <div className='con' >
   
     <div className='col' > </div>
      <div className='helw' >
        <div className='hell' > Hello, Bio Alba </div>
        <div className='what' >What you want to hear today ?</div>
      </div>

        <div className='sub' >


            {dispay}

    <div onClick={dut} >  {bow && <MdPlayArrow onClick={pan} className='play' />  } </div>

     <div onClick={tub}  > {sow && <MdPause onClick={van}  className='pau' />  }  </div>
   
       

       <ReactPaginate 
       nextLabel ={<MdFastForward onClick={fas}  />}
       previousLabel = {<MdFastRewind  onClick={saf} />}
       pageCount = {kop}
       onPageChange = {slip}
       nextLinkClassName ={"nex"}
       previousLinkClassName ={"dre"}
       containerClassName="buk"
       pageClassName='buy'
       
       
       />

        </div>
       
    </div>
  )
}

export default Music