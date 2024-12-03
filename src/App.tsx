import {  } from 'react';
import './App.css';
import Button from './components/Button';
import NoteItem from './components/NoteItem';

function App() {

  return (
    <section className='bg-gray-200 p-8 rounded-lg flex flex-col items-start'>
      <span className='text-2xl font-bold mt-8'>Notes App</span>
      <span className='mb-8 text-sm'>description.</span>
      <input className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='Search' />
      <section className='w-full flex flex-col gap-2'>
        <NoteItem title='First Note' editTime={60} />
        <NoteItem title='Second Note' editTime={60} />
      </section>
      <div className='flex justify-end w-full mt-4'>
        <Button text='Create Note' />
      </div>
    </section>
  )
}

export default App
