'use client';

import React from 'react';

const Map = () => (
  <iframe
    src="https://maps.google.com/maps?q=Edificio%20Torino&t=m&z=18&output=embed&iwloc=near"
    title="Ubicación Edificio Torino"
    className="w-full h-full border-none"
    loading="lazy"
  />
);

export default Map;