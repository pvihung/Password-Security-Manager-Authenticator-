import { useState } from 'react';
import ReactiveButton from 'reactive-button';

export default function Button() {
  const [state, setState] = useState('idle');

  const onClickHandler = () => {
    setState('loading');

    // send an HTTP request
    setTimeout(() => {
      setState('success');
    }, 2000);
  };

  return (
    <ReactiveButton
      buttonState={state}
      idleText="Submit"
      loadingText="Loading"
      successText="Done"
      onClick={onClickHandler}
    />
  );
}