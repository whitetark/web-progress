import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';

const Searchbar = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { user: currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where('displayName', '==', username));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
      const response = await getDoc(doc(db, 'chats', combinedId));
      if (!response.exists()) {
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });
        await updateDoc(doc(db, 'usersChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
        await updateDoc(doc(db, 'usersChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='search'>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='Find a user'
          onKeyDown={handleKey}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      {err && <span>Something went wrong!</span>}
      {user && (
        <div className='userChat' onClick={handleSelect}>
          <img src={user.photoURL} alt='' />
          <div className='userChatInfo'>
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
