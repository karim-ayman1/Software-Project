import React, { useState } from "react";

const partsData = {
  "Engine Components": [
    { part: "Piston", brands: ["Brand A", "Brand B", "Brand C"] },
    { part: "Crankshaft", brands: ["Brand X", "Brand Y"] },
    { part: "Cylinder Head", brands: ["Brand P", "Brand Q", "Brand R"] },
  ],
  "Suspension": [
    { part: "Shock Absorber", brands: ["Brand S1", "Brand S2"] },
    { part: "Control Arm", brands: ["Brand CA1", "Brand CA2", "Brand CA3"] },
  ],
};

const PartsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Engine Components");

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Car Parts</h1>

      {/* Category Selector */}
      <div className="mb-6">
        {Object.keys(partsData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 mr-2 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Parts and Brands */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {partsData[selectedCategory].map(({ part, brands }, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-bold mb-2">{part}</h2>
            <h3 className="font-semibold mb-2">Available Brands:</h3>
            <ul className="list-disc pl-5">
              {brands.map((brand, idx) => (
                <li key={idx}>{brand}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartsPage;
