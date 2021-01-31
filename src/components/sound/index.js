import React, { useEffect } from "react";

import { useAudio } from "./useAudio";

const UserList = ({ users }) => {
  const { audio, ready } = useAudio({ src: "./bgpopup.mp3" });
  console.log(audio, ready);
  useEffect(() => {
      console.log('userlist')
    if (ready) {
        debugger
      audio.play();
    }
  }, [users.length, ready]);

  return <div>{users}</div>;
};

export default UserList;
