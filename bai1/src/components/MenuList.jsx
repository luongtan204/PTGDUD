import React, { useState, useEffect } from 'react';
import menuData from '../data/menu.json';

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    setMenu(menuData);
  }, []);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  return (
    <div>
      <h2>Menu</h2>
      <div className="row">
        {menu.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-4">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-primary" onClick={() => addToOrder(item)}>Add to Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;