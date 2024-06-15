import React from 'react'

function RefreshPage(props){
    return(
        <>
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <h1 className='text-[1.5rem] font-semibold'>No Tour Left</h1>
            <button className='border-white border-[1px] cursor-pointer mt-[18px] py-[10px] px-[80px] bg-[#a9d5f153] rounded-md hover:scale-95 transition-all duration-200' onClick={() => props.setTour(props.data)}>Refresh</button>
        </div>
        </>
    );
}


export default RefreshPage;