import React, { useEffect, useState } from 'react'
import Mealitem from './Mealitem';
import axios from 'axios';
function Meal() {

  console.log(localStorage.getItem('name'))
  const [search, setSearch] = useState();
  const [inp ,setInp] = useState();
 
 
  const foodSearch = async() => {
    if (inp !== ""){
    
    const {data} = await axios.get(`https:www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)
      console.log("hello")
      
      setSearch(data.meals)
    
  }
  else{
    alert("enter food item")
  }
  }



 //
  return (
    <>
      <header className=' py-[3rem]'>
    <h1 className='text-[2rem] text-center font-bold'> Search Your Food Recipe</h1>
    <p className=' text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, earum!</p>
    
    <div className=' text-center p-5'>
      <form action="" onSubmit={(e) => {
        
        e.preventDefault();
        foodSearch()
      }}>
      <input  className='pl-[2rem] py-2 md:w-[40%] outline-none border-2 rounded-xl' type="text" placeholder= "search food item " onChange={(e) => setInp(e.target.value)}/>
      <button className='bg-sky-600 px-4 py-2 rounded-xl mx-4 text-white' >search</button>
      </form>
      
    </div>
   </header>

   <section className='md:flex md:justify-around md:flex-wrap p-3'>
     
          
             {(search !== undefined || search != null)?<Mealitem search ={search} />: <div className='text-center'>search your favourite food items</div>}
      
   </section>
    
    </>
   
   
  )
}

export default Meal
