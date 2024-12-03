interface IProps {
  text: string;
}

export default function Button(props: IProps) {

  return (
    <button className='p-2 bg-blue-500 text-white rounded-lg text-sm active:bg-blue-600'>
      {props.text}
    </button>
  );
}