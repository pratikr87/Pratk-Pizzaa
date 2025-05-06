import React from 'react';

function MenuItem({ image, name, price }) {
  return (
    <div className='menuItem'> {/* changed className to something more descriptive */}
      <div className='menuItemImage' style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
}

export default MenuItem;
