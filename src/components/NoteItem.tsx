import { useState, useEffect } from 'react';

interface IProps {
  title: string;
  editTime: number;
  func: () => void;
}

enum TimeType {
  Days = 'days',
  Hours = 'hours',
  Minutes = 'minutes',
  Seconds = 'seconds'
}

export default function NoteItem(props: IProps) {
  const [editTimeType, setEditTimeType] = useState<TimeType>(TimeType.Hours);
  const [editTime, setEditTime] = useState<number>(0);

  useEffect(() => {
    const timeTypes: TimeType = props.editTime >= 86400 ? TimeType.Days : props.editTime >= 3600 ? TimeType.Hours : props.editTime >= 60 ? TimeType.Minutes : TimeType.Seconds;
    const time: number = Math.floor(props.editTime >= 86400 ? props.editTime / 86400 : props.editTime >= 3600 ? props.editTime / 3600 : props.editTime >= 60 ? props.editTime / 60 : props.editTime);
    setEditTimeType(timeTypes);
    setEditTime(time);
  }, [props]);

  return (
    <div className='p-4 bg-gray-100 rounded-lg w-full flex flex-col items-start cursor-pointer' onClick={props.func}>
      <span className='text-base'>{props.title}</span>
      <span className='text-xs text-gray-500'>{'Last edited ' + editTime + ' ' + editTimeType + ' ago'}</span>
    </div>
  );
}