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
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <img src="https://public-assets-f8h.s3.amazonaws.com/clipart3278228-removebg-preview.png" alt="Logo" width="15" height="15" />
              <div style={{ padding: "0 0 0 8px" }}>
                CRYPTOPOLLS
              </div>
            </div>
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
