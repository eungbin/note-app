import { useRef, useState, useEffect } from 'react';
import Button from '../components/Button';
import NoteItem from '../components/NoteItem';
import useNoteStore from '../store/store';
import { useNavigate } from "react-router-dom";
import { INote } from '../store/types.ts';

export default function Home() {
  const { notes, addNote, clearNotes } = useNoteStore();
  const navigate = useNavigate();
  const [sortedNotes, setSortedNotes] = useState<INote[]>([]);
  const [sortWord, setSortWord] = useState<string>('');
  const sortInput = useRef<HTMLInputElement>(null);

  const _goWritePage = () => {
    navigate('/write');
  }

  const _goDetailPage = (id:number) => {
    navigate(`/detail?id=${id}`);
  }

  const _getDiffInSeconds = (date1: Date, date2: Date): number => {
    const diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
    return Math.floor(diffInMilliseconds / 1000);
  }

  const _getNoteList = () => {
    clearNotes();
    fetch('http://localhost:3000/note', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.json())
    .then((response) => {
      if(response?.length > 0) {
        response.forEach(v => {
          const time: number = _getDiffInSeconds(new Date(), new Date(v.write_time));
          addNote({ id: v.id, title: v.title, content: v.content, writeTime: time });
        })
      }
    })
  }

  const _sortNote = () => {
    const sortedData: INote[] = notes.filter((v: INote) => {
      if(v.title.includes(sortWord)) return v;
    });

    setSortedNotes([...sortedData]);
  }

  const _handleSearchInput = (e) => { setSortWord(e.target.value); }

  useEffect(() => {
    _getNoteList();
  }, []);
  
  useEffect(() => {
    setSortedNotes([...notes]);
  }, [notes]);

  useEffect(() => {
    _sortNote();
  }, [sortWord]);

  return (
    <section className='flex flex-col items-start'>
      <span className='text-2xl font-bold mt-8'>Notes App</span>
      <span className='mb-8 text-sm'>My notes list page.</span>
      <input className='w-96 bg-gray-300 p-2 text-sm rounded-lg mb-4' placeholder='Search' ref={sortInput} onChange={(e) => _handleSearchInput(e)} />
      <section className='w-full flex flex-col gap-2 overflow-y-auto h-96 scrollbar'>
        {sortedNotes?.map(v => (
          <NoteItem key={v.id} title={v.title} editTime={v.writeTime} func={() => _goDetailPage(v.id, v.title, v.content)} />
        ))}
      </section>
      <div className='flex justify-end w-full mt-4'>
        <Button text='Create Note' func={_goWritePage} color='blue' />
      </div>
    </section>
  );
}