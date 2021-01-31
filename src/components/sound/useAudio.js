import { useEffect, useState } from "react";

import {Howl} from 'howler';
import {useInteraction} from "./useInteraction";

const useAudio = options => {
    const [audio, setAudio] = useState();

    const interacted = useInteraction();
  
    useEffect(() => {
        console.log('aa')
      async function createAudoContext() {
        const { Howl } = await import('howler');
        setAudio(new Howl(options));
      }
  
      if (interacted) {
        createAudoContext();
      }
  
      return () => {
        if (audio) {
            debugger
          audio.unload();
        }
      };
    }, [interacted]);
  
    const ready = Boolean(interacted && audio);
  
    return { audio, ready };
}

export { useAudio };