import { useEffect, useState } from 'react';

const events = ['mousedown', 'touchstart'];

const useInteraction = ()  => {
  const [ready, setReady] = useState(false);

  const listener = () => {
    if (ready === false) {
      console.log('loop vo tan')
      setReady(true);
    }
  };

  useEffect(() => {
    console.log('WTF')
    events.forEach((event) => {
      document.addEventListener(event, listener);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener);
      });   
    };
  }, []);

  return ready;
}

export { useInteraction };