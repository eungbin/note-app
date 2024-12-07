import { useRef } from 'react';
import Button from '../components/Button';
import { useNavigate } from "react-router-dom";

export default function Write() {
  const navigate = useNavigate();
  const title = useRef<HTMLInputElement>(null);
  const content = useRef<HTMLTextAreaElement>(null);

  const _writeNote = () => {
    _writeNoteApi();
  }

  const _writeNoteApi = async () => {
    if(title.current?.value === '' || content.current?.value === '') {
      alert('Title and Content is essential contents!!'); return;
    }
    try {
      await fetch('http://localhost:3000/note', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title.current?.value, content: content.current?.value })
      })
      .then(res => {
        res.json(); navigate('/');
      })
      .catch(err => console.log(err)) 
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className='flex flex-col items-start'>
      <span className='text-2xl font-bold mt-8'>New Note</span>
      <span className='mb-8 text-sm'>This page is for creating new note.</span>
      <input className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='Title' ref={title} />
      <textarea className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='content' rows={7} ref={content} />
      <div className='flex justify-end w-full'>
        <Button text='Write' func={_writeNote} color='blue' />
      </div>
    </section>
  );
}