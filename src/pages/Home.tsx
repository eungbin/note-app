import {  } from 'react';
import Button from '../components/Button';
import NoteItem from '../components/NoteItem';
import useNoteStore from '../store/store';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { notes } = useNoteStore();
  const navigate = useNavigate();

  const _goWritePage = () => {
    navigate('/write');
  }

  return (
    <section className='flex flex-col items-start'>
      <span className='text-2xl font-bold mt-8'>Notes App</span>
      <span className='mb-8 text-sm'>My notes list page.</span>
      <input className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='Search' />
      <section className='w-full flex flex-col gap-2'>
        {notes.map((v,idx) => (
          <NoteItem key={idx} title={v.title} editTime={60} />
        ))}
      </section>
      <div className='flex justify-end w-full mt-4'>
        <Button text='Create Note' func={_goWritePage} />
      </div>
    </section>
  );
}