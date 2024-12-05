import {  } from 'react';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";

export default function Write() {
  const navigate = useNavigate();

  const _writeNote = () => {
    navigate('/');
  }

  return (
    <section className='flex flex-col items-start'>
      <span className='text-2xl font-bold mt-8'>New Note</span>
      <span className='mb-8 text-sm'>This page is for creating new note.</span>
      <input className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='Title' />
      <textarea className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='content' rows={7} />
      <div className='flex justify-end w-full mt-4'>
        <Button text='Write' func={_writeNote} />
      </div>
    </section>
  );
}