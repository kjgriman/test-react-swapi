import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Popover = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      {children}
      {isOpen && (
        <div className="relative z-10 bg-gray-800 text-white rounded-lg shadow-lg px-4 py-2 top-10 -left-20">
          <ul>
          {text && text.length > 0 ? text.map((item,i)=>{
              const id = item.split('/').slice(-2)[0]
              return <li className=" text-blue-200 hover:text-blue-500 cursor-pointer" key={i}>
                  <Link
                     to={`/people/${id}`}
                  > Resident - {id}</Link>
                 
                  </li>
          }): 'Not Residents'}
              
          </ul>
        </div>
      )}
      <button
        className="text-gray-800 hover:underline focus:outline-none"
        onClick={togglePopover}
      >
          {isOpen ? 'X' : 'Show Residents'}
      </button>
    </div>
  );
};