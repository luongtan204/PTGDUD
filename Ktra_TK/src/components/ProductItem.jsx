import React from 'react';

const ProductItem = ({ product, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-200 hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h3>
      <p className="text-red-600 font-bold text-lg mb-2">Giá: ${product.price}</p>
      <p className="text-gray-600 mb-2">Danh mục: {product.category}</p>
      <p className="text-gray-600 mb-4">Tồn kho: {product.stock}</p>
      <button 
        className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200"
        onClick={() => onDelete(product)}
      >
        Xóa
      </button>
    </div>
  );
};

export default ProductItem; 