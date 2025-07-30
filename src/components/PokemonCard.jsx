import React from 'react'

const PokemonCard = () => {
  return (
      <div className='w-[85%] h-[35%] bg-white rounded-2xl shadow-2xl '>
        <div className='w-full h-[70%]  anime  flex flex-col justify-center items-center '>
          <img src="/src/assets/images/Pokemon - 3.png" alt="" className='w-40 bird' />
        </div>
         
         <div className='w-full h-[30%] bg-amber-800 flex flex-col justify-center items-center'>
           <p className='text-[1.1rem]'>001</p>
           <h1>Nom</h1>
           <div >

           </div>
         </div>
      </div>
  )
}

export default PokemonCard
