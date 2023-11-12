import React from 'react';

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img
          src='https://images.pexels.com/photos/18311326/pexels-photo-18311326/free-photo-of-a-woman-with-red-hair-and-green-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <span>Just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img
          src='https://images.pexels.com/photos/18311326/pexels-photo-18311326/free-photo-of-a-woman-with-red-hair-and-green-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
    </div>
  );
};

export default Message;
