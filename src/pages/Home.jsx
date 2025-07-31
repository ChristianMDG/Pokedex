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
      <div className='w-[70%] h-full  grid md:grid-cols-4 grid-cols-2 p-3'><PokemonCard/></div>
      <div className='md:w-[30%] h-full w-full bg-cyan-500 justify-center items-center text-3xl hidden md:flex'>PokemonDetails.jsx</div>
     </main>
    </div>
  )
}

export default Home
