import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import ProductItem from './ProductItem';

const ProductList = () => {
  // Initial sample data
  const initialProducts = [
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
  ];

  // Load products from localStorage or use initial data
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, product: null });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

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

  // Calculate totals
  const totalProducts = filteredProducts.length;
  const totalStock = filteredProducts.reduce((sum, product) => sum + product.stock, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Danh Sách Sản Phẩm</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Thêm sản phẩm
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <div className="w-full md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <div className="flex flex-wrap gap-6 text-gray-700">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tổng sản phẩm</p>
                  <p className="text-xl font-bold text-blue-600">{totalProducts}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Tổng tồn kho</p>
                  <p className="text-xl font-bold text-green-600">{totalStock}</p>
                </div>
              </div>
            </div>
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

        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Không tìm thấy sản phẩm</h3>
            <p className="text-gray-500 mb-4">Thử thay đổi bộ lọc hoặc tìm kiếm của bạn</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Xóa bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductItem 
                key={product.id}
                product={product}
                onDelete={openDeleteModal}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList; 