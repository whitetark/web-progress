import React from 'react';
import ChatList from './ChatList';
import Navbar from './Navbar';
import Searchbar from './Searchbar';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Searchbar />
      <ChatList />
    </div>
  );
};

export default Sidebar;
