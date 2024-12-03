import { useState, useEffect } from 'react';

interface IProps {
  title: string;
  editTime: number;
}

export default function NoteItem(props: IProps) {
  const [editTime, setEditTime] = useState<'seconds' | 'minutes' | 'hours'>('hours');

  useEffect(() => {
    setEditTime(props.editTime > 60)
  }, [props]);

  return (
    <div className='p-4 bg-gray-100 rounded-lg w-full flex flex-col items-start'>
      <span className='text-base'>{props.title}</span>
      <span className='text-xs text-gray-500'>{'Last edited ' + props.editTime + editTime + 'ago'}</span>
    </div>
  );
}