import useNoteStore from '../store/store';

interface IProps {
  text: string;
  func: () => void;
}

export default function Button(props: IProps) {
  const { addNotes } = useNoteStore();

  const _clickFunc = () => {
    props.func();
  }

  return (
    <button className='p-2 bg-blue-500 text-white rounded-lg text-sm active:bg-blue-600' onClick={_clickFunc}>
      {props.text}
    </button>
  );
}