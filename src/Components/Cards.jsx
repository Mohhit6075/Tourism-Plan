import React, { useState } from 'react'

 const Card = (props) => {
    const [readMore, setReadMore] = useState(false);

    let description = readMore ? props.tour.info : `${props.tour.info.substring(0, 180)}....`
  return (
    <>
    <div className='w-[390px] h-fit flex flex-col p-[1rem] m-[1rem] shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded-md justify-center items-center mx-auto'>
      <img src={props.tour.image} alt={props.tour.name} className='w-[380px] aspect-square object-cover'/>
      <div>
        <p className='text-[#1faa59] text-[1.4rem] font-semibold before:content-["₹"] mt-4' >{props.tour.price}</p>
        <h1 className='text-[1.7rem] font-semibold'>{props.tour.name}</h1>
        <p className='text-[17px]'>
          {description}<span className='text-[#00c3ff] cursor-pointer' onClick={() => {setReadMore(!readMore)}}>
            {readMore ? "Show Less" : "Read More" }</span></p>
      </div>
      <button className='bg-[#b4161b21] rounded-md border-[#b4161b] border-[1px] py-[7px] px-[80px] font-semibold text-[18px] mt-10 cursor-pointer transition-all duration-500 hover:bg-[#ff0000] hover:text-white' onClick={() => {props.getRemoveId(props.tour.id)}} >Not Interested</button>
    </div>
    </>
  )
}

export default Card;