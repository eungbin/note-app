import {  } from 'react';
import './App.css';

function App() {

  return (
    <section className='bg-gray-200 p-8 rounded-lg flex flex-col items-start'>
      <span className='text-2xl font-bold mt-8'>Notes App</span>
      <span className='mb-8 text-sm'>description.</span>
      <div className='flex flex-row justify-between'>
        <input className='w-80 bg-gray-300 p-2 text-sm rounded-lg' placeholder='Search' />
      </div>
    </section>
  )
}

export default App
