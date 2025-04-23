import React, { useState } from 'react';
import ProductForm from './ProductForm';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop Dell XPS 13",
      price: 1299.99,
      category: "Công nghệ",
      stock: 15
    },
    {
      id: 2,
      name: "iPhone 13 Pro",
      price: 999.99,
      category: "Công nghệ",
      stock: 25
    },
    {
      id: 3,
      name: "Samsung 4K TV",
      price: 799.99,
      category: "Công nghệ",
      stock: 10
    },
    {
      id: 4,
      name: "Áo thun nam",
      price: 29.99,
      category: "Thời trang",
      stock: 50
    },
    {
      id: 5,
      name: "Quần jean nữ",
      price: 59.99,
      category: "Thời trang",
      stock: 30
    },
    {
      id: 6,
      name: "Nồi cơm điện",
      price: 89.99,
      category: "Gia dụng",
      stock: 20
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, product: null });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories from products
  const categories = ['Tất cả', ...new Set(products.map(product => product.category))];

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
    setDeleteModal({ isOpen: false, product: null });
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const openDeleteModal = (product) => {
    setDeleteModal({ isOpen: true, product });
  };

  const filteredProducts = products.filter(product => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower) ||
      product.price.toString().includes(searchLower) ||
      product.stock.toString().includes(searchLower);
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Tất cả' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Danh Sách Sản Phẩm</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Thêm sản phẩm
        </button>
      </div>

      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="w-full md:w-64">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Tất cả danh mục</option>
            {categories.filter(category => category !== 'Tất cả').map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isModalOpen && (
        <ProductForm
          onAddProduct={handleAddProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {deleteModal.isOpen && deleteModal.product && (
        <DeleteConfirmationModal
          productName={deleteModal.product.name}
          onConfirm={() => handleDelete(deleteModal.product.id)}
          onCancel={() => setDeleteModal({ isOpen: false, product: null })}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
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
              onClick={() => openDeleteModal(product)}
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