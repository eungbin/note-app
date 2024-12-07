interface IProps {
  text: string;
  func: () => void;
  color: string;
}

export default function Button(props: IProps) {
  const _clickFunc = () => {
    props.func();
  }

  if(props.color === 'blue') {
    return (
      <button className='p-2 bg-blue-500 text-white rounded-lg text-sm active:bg-blue-600' onClick={_clickFunc}>
        {props.text}
      </button>
    );
  } else if(props.color === 'red') {
    return (
      <button className='p-2 bg-red-500 text-white rounded-lg text-sm active:bg-red-600' onClick={_clickFunc}>
        {props.text}
      </button>
    );
  } else {
    return (
      <button className='p-2 bg-blue-500 text-white rounded-lg text-sm active:bg-blue-600' onClick={_clickFunc}>
        {props.text}
      </button>
    );
  }
}