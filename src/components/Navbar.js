import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';

function Navbar({ account, activeItem, setActiveItem }) {  
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <>
      <Menu secondary size='large'>
        <Menu.Menu
          name='logo'
        >
          <Segment inverted style={{ borderRadius: 0 }}>
            CRYPTOPOLLS
          </Segment>
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
          <Segment inverted style={{ borderRadius: 0 }}>
            {account}
          </Segment>
        </Menu.Menu>
      </Menu>
      </>
  );
}

export default Navbar;
