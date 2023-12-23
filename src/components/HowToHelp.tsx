import Image from 'next/image';
import React from 'react';

const CardInformation: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">Card Information</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex justify-between mt-4">
        <div className="flex items-center">
          <Image src="" alt="Card Icon" className="w-6 h-6 mr-2" />
          <span className="text-gray-700">Card Number</span>
        </div>
        <span className="text-gray-700">**** **** **** 1234</span>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <Image src="" alt="Card Icon" className="w-6 h-6 mr-2" />
          <span className="text-gray-700">Card Holder</span>
        </div>
        <span className="text-gray-700">John Doe</span>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <Image src="" alt="Card Icon" className="w-6 h-6 mr-2" />
          <span className="text-gray-700">Expiration Date</span>
        </div>
        <span className="text-gray-700">12/24</span>
      </div>
    </div>
  );
};

export default CardInformation;
