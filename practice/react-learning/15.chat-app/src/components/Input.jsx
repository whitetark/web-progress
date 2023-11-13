import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db, storage } from '../firebase';
import Attach from '../img/attach.png';
import Img from '../img/img.png';

const Input = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);

  const { data } = useContext(ChatContext);
  const { user } = useContext(AuthContext);

  const handleSend = async () => {
    if (file) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: user.uid,
                data: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        },
      );
    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: user.uid,
          data: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, 'usersChats', user.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    });
    await updateDoc(doc(db, 'usersChats', data.user.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId + '.date']: serverTimestamp(),
    });

    setText('');
    setFile(null);
  };
  return (
    <div className='input'>
      <input
        type='text'
        placeholder='Type something...'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className='send'>
        <img src={Attach} alt='' />
        <input
          type='file'
          style={{ display: 'none' }}
          id='file'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor='file'>
          <img src={Img} alt='' />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
