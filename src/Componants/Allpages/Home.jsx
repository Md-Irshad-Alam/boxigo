import React, { useEffect, useState } from 'react'
import style from './Style.css'
import {AiOutlineArrowRight, AiOutlineWarning} from "react-icons/ai"
import {AiFillHome} from "react-icons/ai"
import {RiPinDistanceFill} from "react-icons/ri"
import {BsFillCalendar2WeekFill} from "react-icons/bs"
import {BsPencilFill} from "react-icons/bs"


import {MdOutlineStackedBarChart} from "react-icons/md"

import axios from 'axios'
import Sidebar from './Sidebar'
import Hidecontent from './Invantry'
import { Link } from 'react-router-dom'
import Invantry from './Invantry'
function Home() {
    const [data, setData] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState([]);
    const [hidedata, setHideData] = useState(true);
  
    useEffect(() => {
      axios
        .get('http://test.api.boxigo.in/sample-data/')
        .then((response) => {
          setData(response.data.Customer_Estimate_Flow);
        })
        .catch((error) => {
          console.log(`message: ${error}`);
        });
    }, []);
  
    // if (!data) {
    //   return <p>Loading...</p>;
    // }
  
    const toggleHideData = (itemId) => {
      setSelectedItemId(itemId);
      setHideData(!hidedata);
    };
  
    const selectedItem = data.find((item) => item.estimate_id === selectedItemId);

  return (
    <>
    <div>
     <h2>My Movies</h2>
     <div className="address">
       {data.map((ele, id) => (
         <div key={id}>
            <div className="address-container">
           <div className="address-content" >
               <h4>From</h4>
               <p>{ele.from_address.fromAddress}</p>
           </div>
               <div className='arrow_symb'>
               <AiOutlineArrowRight fontSize="25px" color="orange"/>
               </div>
           <div className="address-content">
               <h4>To</h4>
               <p>{ele.to_address.toAddress}</p>
           </div>
           <div className="address-content">
               <h4>Request#</h4>
               <p>{ele.estimate_id}</p>
           </div>
           </div>
           <div className="details-container">
               <div className="details-card">
                   <AiFillHome/>
                   <p>{ele.property_size}</p>
               </div>
           <div className="details-card">
              
                   <MdOutlineStackedBarChart/>
                   <p>{ele.old_floor_no}</p>
               
           </div>
           <div className="details-card">
                   <RiPinDistanceFill/>
                   <p>{ele.distance}</p>
                   
           </div>

           <div className="details-card">
               <BsFillCalendar2WeekFill/>
               <p>{ele.date_created}</p>
               <BsPencilFill/>
               <br />
               <p>is flexible</p>
           </div>
           {/* ...rest of the code */}
           
           <div className="details-card">
             <button id="move-btn" onClick={() => toggleHideData(ele.estimate_id)}>
               View Move details
             </button>
           </div>
           <div className="details-card">
              <button  id="quote-btn">Quotes Awating </button>
           </div>

           </div>
           {selectedItem?.estimate_id === ele.estimate_id && (
             <div className={`hide-container ${hidedata ? "hidefalse" : ""}`}  style={{ transition: 'max-height 5s ease-in-out' }}>
               {/* ...rest of the code */}
               <div className={`"hide-container" ${hidedata ? "hidefalse": ""}`}>
               <div className="inf-container">
               <p><span><AiOutlineWarning/></span> Please update your move date before two days of shifting </p>

                       <div className="aditional">
                           <h4>Additional Information</h4>
                           <button id="hide-btn">Edit Additonal Info</button>
                       </div>
                       <br />
                       <span>Test Data</span>

                       <div className="aditional">
                           <h4>House Details</h4>
                           <button  id="hide-btn">Edit Additonal Info</button>
                       </div>
               <h4>Existing House Details</h4>
               </div>

                       <div className="main-content-hi">
                           <div className="inner-cont">
                               <h5>Floor NO</h5>
                               <p>{ele.new_floor_no}</p>
                           </div>
                           <div className="inner-cont">
                               <h5>Elevator Avaliable</h5>
                               <p>{ele.new_elevator_availability}</p>
                           </div>
                           <div className="inner-cont">
                               <h5>Distance from Elevator / Staircase to truck</h5>
                               <p>11 meters</p>
                           </div>
                       </div>

                 
                    </div>
             </div>
           )}
         </div>
       ))}
     </div>
     <Invantry data={data}/>
   </div>
   </>
  )
}

export default Home
