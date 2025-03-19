import React, { useState, useEffect, useContext, createContext } from 'react';
import '../styles/Menu.css';

// Tạo context cho dữ liệu menu
const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [menuList, setMenuList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu menu từ file JSON
    const fetchMenuData = async () => {
      try {
        const response = await fetch('/src/data/menu.json'); // Đảm bảo đường dẫn đúng
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMenuList(data);
      } catch (error) {
        console.error('Fetch menu data failed:', error);
      }
    };

    fetchMenuData();
  }, []);

  return (
    <MenuContext.Provider value={{ menuList, selectedItem, setSelectedItem }}>
      {children}
    </MenuContext.Provider>
  );
};

const Menu = () => {
  const context = useContext(MenuContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { menuList, selectedItem, setSelectedItem } = context;

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
    // Thêm logic xử lý thêm vào giỏ hàng tại đây
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <ul>
        {menuList.map((item) => (
          <li key={item.id} onClick={() => setSelectedItem(item)}>
            <img src={item.image} alt={item.name} className="menu-item-image" />
            {item.name}
            <button onClick={() => handleAddToCart(item)} className="btn-add-to-cart">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      {selectedItem && (
        <div className="menu-item-details">
          <h2>{selectedItem.name}</h2>
          <img src={selectedItem.image} alt={selectedItem.name} className="menu-item-image" />
          <p>{selectedItem.description}</p>
        </div>
      )}
    </div>
  );
};

export { MenuProvider, Menu };