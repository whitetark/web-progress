import React from 'react';

const ChatList = () => {
  return (
    <div className='chatlist'>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/8486108/pexels-photo-8486108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/8486108/pexels-photo-8486108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className='userChat'>
        <img
          src='https://images.pexels.com/photos/8486108/pexels-photo-8486108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
