import React from 'react'

const PokemonCard = () => {
  return (
    <div className='w-full h-full  grid grid-cols-4 p-3'>
      <div className='w-[85%] h-[35%] bg-white rounded-2xl shadow-2xl '>
        <div className='w-full h-[70%]  anime  flex flex-col justify-center items-center '>
          <img src="/src/assets/images/Pokemon - 3.png" alt="" className='w-40 bird' />
        </div>
         
         <div className='w-full h-[30%] bg-amber-800'>
           
         </div>
      </div>
    </div>
  )
}

export default PokemonCard
