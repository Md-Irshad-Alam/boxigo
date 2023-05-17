import React, { useEffect, useState } from 'react';
import style from './Style.css';
import { AiOutlineCaretDown } from 'react-icons/ai';

function Invantry({ data }) {
  const [getdetail, setdetails] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const getdetails = () => {
    data.forEach((ele) => {
      setdetails(ele.items.inventory);
    });
  };

  const toggleHideData = (itemId) => {
    setSelectedItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  useEffect(() => {
    getdetails();
  }, []);

  return (
    <div className='invantry'>
      {getdetail.map((ele) => (
        <>
        <div className='invatru-cart' key={ele.id}>
          <div className='content-p'>
            <h5 id='name'>{ele.name}</h5>
            <p id='count'>{ele.category.length}</p>
          </div>
          <div className='arrow'>
            <AiOutlineCaretDown onClick={() => toggleHideData(ele.id)} />
          </div>
        </div>
        
          {selectedItemId === ele.id && (
            <div className='category-details'>
              <ul>
                {ele.category.map((category) => (
                  <li key={category.id}>{category.name}</li>
                ))}
              </ul>
            </div>
          )}
        
        </>
      ))}
    </div>
  );
}

export default Invantry;
