import React from 'react'
import Card from './Cards';

function Tours(props){
    function getId(id){
        props.removeTour(id);
    }
    return(
        <>
        <div className='w-10/12 h-full flex flex-col justify-center items-center mt-20 gap-20'>
            <h1 className='text-[56px] font-semibold text-center border-[6px] border-[#ff4400] border-dashed rounded-[1.3rem] px-20 mt-20'>Plan With Mohhit</h1>
            <div className='max-w-[1300px] flex flex-wrap h-full mx-auto'>
                {
                    props.tours.map((tour) => {
                        return <Card tour={tour} getRemoveId={getId} />
                    })
                }
            </div>
        </div>
        
        
        </>
    );
}


export default Tours;