import React, { useState } from "react";
import data from "./data";
import RefreshPage from './Components/RefreshPage';
import Tours from "./Components/Tours";

function App() {
  const [tour, setTour] = useState(data);

  function removeTour(id){
    const newTour = tour.filter(tour => tour.id !== id)
    console.log(id);
    setTour(newTour);
  }

  if(tour.length === 0){
    return <RefreshPage data={data} setTour={setTour} />
  }

  return (
    <>
    <div className="w-[100vw] h-[100vh] flex justify-center overflow-x-hidden">
      <Tours removeTour={removeTour} tours={tour} />
      </div>
      
    
    </>

  );
    

  
}

export default App;
