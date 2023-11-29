import React from 'react';
import ItemList from './ItemList';

const YourComponent = () => {
  const productsData = [
  ];

  return (
    <div>
      <ItemList products={productsData} />
    </div>
  );
};

export default YourComponent;