import React from "react";
import PartCard from "./PartCard";

const partsData = {
  "Engine Components": ["Piston", "Crankshaft", "Cylinder Head"],
  "Suspension": ["Shock Absorber", "Control Arm", "Ball Joint"],
  "Braking System": ["Brake Pads", "Brake Rotors", "Brake Calipers"],
};

const PartsPage = ({ selectedCategory = "Engine Components" }) => {
  const parts = partsData[selectedCategory] || [];

  return (
    <section className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">{selectedCategory} Parts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.length > 0 ? (
          parts.map((part, index) => <PartCard key={index} title={part} />)
        ) : (
          <p className="text-gray-600">No parts available for the selected category.</p>
        )}
      </div>
    </section>
  );
};

export default PartsPage;
