import React from 'react';

interface SpecificationItem {
  label: string;
  value: string ;
}

interface ProductData {
  title: string;
  brand: string;
  imported: string;
  model: string;
  modelName: string;
  dimensions: string;
  batteries: string;
  itemNumber: string;
  os: string;
  resolution: string;
  compatibleDevices: string;
  specialFeatures: string;
  mountingHardware: string[];
  numberOfItems: string;
  displayTechnology: string;
  screenSize: string;
  displayType: string;
  wattage: string;
  batteryLife: string;
  batteriesIncluded: string;
  batteriesRequired: string;
  batteryCapacity: string;
  batteryCellComposition: string;
  connectorType: string;
  deviceInterface: string;
  includedRechargeable: string;
  manufacturer: string;
  countryOfOrigin: string;
  itemWeight: string;
}


const ProductDetailPage = () => {
  const productData: ProductData = {
    title: "Fastrack Limitless Valor Rugged Smartwatch|Large 1.91\" Super UltraVU Display|Functional Crown|Highest 320x385 Pixel Resolution|SingleSync BT Calling|100+ Sports Modes & Watchfaces|IP68",
    brand: "Fastrack",
    imported: "Imported by Titan Company Limited, Imported by Titan Company Limited 3 Sipcot Industries complex, House: 635126",
    model: "38109PP01",
    modelName: "Fastrack Limitless Valor",
    dimensions: "4 x 8 x 12 cm; 42 Grams",
    batteries: "1 Lithium Polymer batteries required. (included)",
    itemNumber: "38109PP01",
    os: "Smartwatch",
    resolution: "320 x 385",
    compatibleDevices: "Smartphone",
    specialFeatures: "Multisport Tracker, Activity Tracker, Camera, Phone Call, Heart Rate Monitor",
    mountingHardware: ["Watch", "Magnetic Charging Cable", "Quick Start Guide", "Warranty Card"],
    numberOfItems: "1",
    displayTechnology: "SingleSync BT",
    screenSize: "1.91 Inches",
    displayType: "LCD",
    wattage: "100 Watts",
    batteryLife: "7 Days",
    batteriesIncluded: "Yes",
    batteriesRequired: "Yes",
    batteryCapacity: "300",
    batteryCellComposition: "Lithium Polymer",
    connectorType: "Bluetooth",
    deviceInterface: "Touchscreen, Microphone, Buttons",
    includedRechargeable: "Yes",
    manufacturer: "Imported by Titan Company Limited",
    countryOfOrigin: "China",
    itemWeight: "42 g"
  };

  const leftColumnSpecs: SpecificationItem[] = [
    { label: "Brand", value: "Manufacturer" },
    { label: "Model", value: productData.model },
    { label: "Model Name", value: productData.modelName },
    { label: "Package Dimensions", value: productData.dimensions },
    { label: "Batteries", value: productData.batteries },
    { label: "Item model number", value: productData.itemNumber },
    { label: "Operating System", value: productData.os },
    { label: "Resolution", value: productData.resolution },
    { label: "Compatible Devices", value: productData.compatibleDevices },
    { label: "Special Features", value: productData.specialFeatures },
    { label: "Mounting Hardware", value: productData.mountingHardware.join(", ") },
    { label: "Number of items", value: productData.numberOfItems },
    { label: "Display Technology", value: productData.displayTechnology }
  ];

  const rightColumnSpecs: SpecificationItem[] = [
    { label: "Fastrack", value: productData.imported },
    { label: "Standing screen display size", value: productData.screenSize },
    { label: "Display Type", value: productData.displayType },
    { label: "Wattage", value: productData.wattage },
    { label: "Battery Average Life", value: productData.batteryLife },
    { label: "Batteries Included", value: productData.batteriesIncluded },
    { label: "Batteries Required", value: productData.batteriesRequired },
    { label: "Battery Capacity", value: productData.batteryCapacity },
    { label: "Battery cell composition", value: productData.batteryCellComposition },
    { label: "Connector Type", value: productData.connectorType },
    { label: "Device interface - primary", value: productData.deviceInterface },
    { label: "Included Rechargeable Battery", value: productData.includedRechargeable },
    { label: "Manufacturer", value: productData.manufacturer },
    { label: "Country of Origin", value: productData.countryOfOrigin },
    { label: "Item Weight", value: productData.itemWeight }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white">
      <div className="border border-gray-200">
        <div className="bg-gray-100 p-3">
          <h2 className="text-lg font-medium text-gray-700">Product Overview</h2>
        </div>
        
        <div className="p-4">
          <div className="text-orange-500 text-sm font-medium">Fastrack Limitless Valor Rugged Smartwatch</div>
          
          <h1 className="text-xl text-gray-700 font-medium my-2">
            {productData.title}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* Left Column */}
            <div>
              {leftColumnSpecs.map((spec, index) => (
                <div key={index} className="grid grid-cols-2 py-2">
                  <div className="text-sm text-gray-600 font-medium">{spec.label}</div>
                  <div className="text-sm text-gray-800">{spec.value}</div>
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div>
              {rightColumnSpecs.map((spec, index) => (
                <div key={index} className="grid grid-cols-2 py-2">
                  <div className="text-sm text-gray-600 font-medium">{spec.label}</div>
                  <div className="text-sm text-gray-800">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;