import React from 'react';

const StoreItem = ({ store }) => {
  return (
    <div className="border rounded p-4 mb-4 bg-white shadow-sm">
      <h4 className="font-bold text-xl mb-1">{store.name}</h4>
      <p className="mb-1">{store.address}</p>
      <p className="mb-1">
        <a href={`tel:${store.phone}`} className="text-blue-600 hover:underline">
          {store.phone}
        </a>
      </p>
      <div className="mb-2">
        <strong>Store Hours</strong>
        <ul className="list-disc list-inside">
          {store.hours.map(({ day, hours }) => (
            <li key={day}>
              <span className="font-semibold">{day}</span>: {hours}
            </li>
          ))}
        </ul>
      </div>
      <a
        href={store.directions}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Get directions
      </a>
    </div>
  );
};

export default StoreItem;
