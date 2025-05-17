import React from 'react';

const openingHours = [
  { day: 'Monday', hours: '9:00am - 12:00am' },
  { day: 'Tuesday', hours: '9:00am - 12:00am' },
  { day: 'Wednesday', hours: '9:00am - 12:00am' },
  { day: 'Thursday', hours: '9:00am - 12:00am' },
  { day: 'Friday', hours: '9:00am - 12:00am' },
  { day: 'Saturday', hours: '9:00am - 12:00am' },
  { day: 'Sunday', hours: '9:00am - 11:00pm' },
];

const LocationDetails = () => {
  return (
    <section className="container mx-auto p-4 bg-white rounded shadow-md my-6">
      <h1 className="text-3xl font-bold mb-4">Smoke Rhythm Hattiesburg</h1>
      <p className="text-green-600 font-semibold mb-2">Open: Closes at 12:00am</p>
      <div className="mb-4">
        <img
          src="https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/pin-s+f7616e(-89.377626,31.301683)/-89.377626,31.301683,16,0,0/920x460?access_token=pk.eyJ1IjoieGhhbGUtY2l0eSIsImEiOiJja3l2MTJvNmEwMm52MndtbzN4dXB4ZmF1In0.uIH9htCT8vNcJpWf6hDeTQ"
          alt="Smoke Rhythm Hattiesburg Map"
          className="w-full rounded"
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between mb-6 gap-8">
        <div className="md:w-1/2 order-1 md:order-2">
          <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
          <ul>
            {openingHours.map(({ day, hours }) => (
              <li key={day} className="mb-1">
                <span className="font-semibold">{day}</span>: {hours}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 order-2 md:order-1">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=5004%20Lincoln%20Rd%20Ext%20Suite%2050%2C%20Hattiesburg%2C%20MS%2039402"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Directions
          </a>
          <br />
          <a href="tel:(601) 336-6338" className="text-blue-600 hover:underline">
            Call (601) 336-6338
          </a>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold text-lg">Address</h3>
        <p>5004 Lincoln Rd Ext Suite 50, Hattiesburg, MS 39402</p>
      </div>
    </section>
  );
};

export default LocationDetails;
