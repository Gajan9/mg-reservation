import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-lg max-w-sm bg-white">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg text-gray-600 font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;