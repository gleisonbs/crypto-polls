import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

function Navbar({ account, activeItem, setActiveItem }) {  
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
      <Menu inverted size='large'>
        <Menu.Menu
          name='logo'
        >
          CRYPTOPOLLS
        </Menu.Menu>

        <Menu.Item
          name='polls'
          active={activeItem === 'polls'}
          onClick={handleItemClick}
        >
          Polls
        </Menu.Item>

        <Menu.Item
          name='new'
          active={activeItem === 'new'}
          onClick={handleItemClick}
        >
          New
        </Menu.Item>

        <Menu.Menu
          position='right'
        >
          {account}
        </Menu.Menu>
      </Menu>
  );
}

export default Navbar;
