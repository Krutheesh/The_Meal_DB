import React from 'react'
import { useNavigate } from 'react-router-dom'

function Mealitem({search}) {
  const Navigate= useNavigate();
  console.log("master",search)
  return ( 

  <>
  {(search === undefined || search === null)? <div className='text-center'>not found</div> : search.map( (ele , index ) => {
    return(
      <div className='text-center md:w-[15%] md:my-[3rem] m-5 md: mx-2  rounded-2xl border-2 border-gray-400 p-3' key={index} onClick={() =>{Navigate(`${ele.idMeal}`)}} >
      <img className="rounded-2xl" src={ele.strMealThumb} alt="nas"/>
      <h2 className='text-center py-3'>{ele.strMeal}</h2>
    </div>
    )
  }
  
  )
}
  </>
      

  )
}
  

export default Mealitem
