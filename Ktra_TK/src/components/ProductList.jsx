import React from 'react';

const ProductList = () => {
  // Sample data - in a real application, this would come from an API or database
  const products = [
    {
      id: 1,
      name: "Laptop Dell XPS 13",
      price: 1299.99,
      category: "Electronics",
      stock: 15
    },
    {
      id: 2,
      name: "iPhone 13 Pro",
      price: 999.99,
      category: "Electronics",
      stock: 25
    },
    {
      id: 3,
      name: "Samsung 4K TV",
      price: 799.99,
      category: "Electronics",
      stock: 10
    }
  ];

  const handleDelete = (id) => {
    // In a real application, this would make an API call to delete the product
    console.log(`Deleting product with id: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Danh Sách Sản Phẩm</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h3>
            <p className="text-red-600 font-bold text-lg mb-2">Giá: ${product.price}</p>
            <p className="text-gray-600 mb-2">Danh mục: {product.category}</p>
            <p className="text-gray-600 mb-4">Tồn kho: {product.stock}</p>
            <button 
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors duration-200"
              onClick={() => handleDelete(product.id)}
            >
              Xóa
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 