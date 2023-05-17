import React from 'react';

function Hidemore({ data }) {

  return (
    <div className="hidemore">
      {data.map((category) => (
        <div key={category.id}>
          <h6>{category.name}</h6>
          {category.items.map((item) => (
            <p key={item.id}>{item.displayName}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Hidemore;
