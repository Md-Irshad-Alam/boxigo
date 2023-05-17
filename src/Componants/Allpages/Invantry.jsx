import React, { useEffect, useState } from 'react';
import style from './Style.css';
import { AiOutlineCaretDown } from 'react-icons/ai';
import Hidemore from './Hidemore';

function Invantry({ data }) {
  const [getdetail, setdetails] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [hidedata, setHideData] = useState(true);
  const getdetails = () => {
    data.map((ele) => {
      setdetails(ele.items.inventory);
    });
  };

  const toggleHideData = (itemId) => {
    // if (selectedItemId === itemId) {
    //   setSelectedItemId(null);
    // } else {
    //   setSelectedItemId(itemId);
    // }
    setSelectedItemId(itemId)
    setHideData(!hidedata)
  };

  useEffect(() => {
    getdetails();
  }, []);

  return (
    <div className="invantry">
      {getdetail.map((ele) => (
        <>
          <div className="invatru-cart" key={ele.id}>
            <div className="content-p">
              <h5 id="name">{ele.name}</h5>
              <p id="count">{ele.category.length}</p>
            </div>
            <div className="arrow">
              <AiOutlineCaretDown
                onClick={() => toggleHideData(ele.id)}
                className={selectedItemId === ele.id ? 'expanded' : ''}
              />
            </div>
          </div>
          {selectedItemId === ele.id && (
            <div className="hidecontainer">
              <Hidemore data={ele.category} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export default Invantry;
