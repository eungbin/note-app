import {  } from 'react';
import Button from '../components/Button';
import { useNavigate, useLocation } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const title = queryParams.get('title');
  const content = queryParams.get('content');

  const _deleteNote = () => {

  }

  return (
    <section className='flex flex-col items-start'>
      <span className='text-2xl font-bold mt-8'>Note Item</span>
      <span className='mb-8 text-sm'>This page is for viewing note.</span>
      <input className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='Title' readOnly value={title} />
      <textarea className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='content' rows={7} readOnly value={content} />
      <div className='flex justify-end w-full'>
        <Button text='Delete' func={_deleteNote} color='red' />
      </div>
    </section>
  );
}