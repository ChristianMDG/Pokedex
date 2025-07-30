import React from 'react'
import PokemonCard from '../components/PokemonCard'

PokemonCard
const Home = () => {
 
  return (
    <div className='w-screen h-screen bg-yellow-200 flex flex-col'> 
      <nav className='w-full h-[10%] bg-[var(--color-header)] flex justify-center items-center text-3xl'>
      Searchbar.jsx
      </nav>
     <main className='w-full h-[90%] flex md:flex-row  flex-col'>
      <div className='w-[70%] h-full  hidden md:flex justify-center items-center text-3xl p-2'><PokemonCard/></div>
      <div className='md:w-[30%] h-full w-full bg-cyan-500 flex justify-center items-center text-3xl'>PokemonDetails.jsx</div>
     </main>
    </div>
  )
}

export default Home
