import { useRef } from 'react';
import Button from '../components/Button';
import { useNavigate, useLocation } from "react-router-dom";
import useNoteStore from '../store/store';

export default function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id: number = Number(queryParams.get('id'));
  const updateTitle = useRef<HTMLInputElement>(null);
  const updateContent = useRef<HTMLTextAreaElement>(null);
  const { notes } = useNoteStore();

  const _deleteNote = () => {
    fetch('http://localhost:3000/note', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id })
    })
    .then((response) => response.json())
    .then((response) => { console.log(response); navigate('/'); })
    .catch((err) => console.log(err))
  }

  const _updateNote = () => {
    fetch('http://localhost:3000/note', {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: updateTitle.current?.value, content: updateContent.current?.value, id: id })
    })
    .then((response) => response.json())
    .then((response) => { console.log(response); navigate('/'); })
    .catch((err) => console.log(err))
  }

  return (
    <section className='flex flex-col items-start'>
      <span className='text-2xl font-bold mt-8'>Note Item</span>
      <span className='mb-8 text-sm'>This page is for viewing note.</span>
      <input className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='Title' defaultValue={notes[notes.findIndex(v => v.id === id)].title} ref={updateTitle} />
      <textarea className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='content' rows={7} defaultValue={notes[notes.findIndex(v => v.id === id)].content} ref={updateContent} />
      <div className='flex justify-between w-full'>
        <Button text='Delete' func={_deleteNote} color='red' />
        <Button text='Update' func={_updateNote} color='blue' />
      </div>
    </section>
  );
}