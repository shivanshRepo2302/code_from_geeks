import React, { useState } from "react";
import styles from '../assets/UI/Home.module.css';
import CatagoriesHeader from "./catagoriesHeader";
import Card from '../assets/UI/card.js';
import { NavLink } from "react-router-dom";

function getCartFromStorage() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCartToStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

const TechPage = () => {
  const demoProducts = [
    {
      id: 4,
      name: "Redmi A5",
      price: "₹5,000",
      image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/ZPjZSsFcFX-redmi-a5-494581594-i-1-1200wx1200h.jpeg',
      description: "Redmi A5.",
    },
    {
      id: 5,
      name: "GTA 5 physical copy",
      price: "₹1,299",
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRrACtx6AB8cevQ4JfsXzPtxhlKkAeoVPuzB5gBYlxh_mzKXzFbbxY69EvNMD2ATxWBZWskRN72l16tiMQYZhDGYnEPJYJlnehQnkGZKRhOxKy0m4ZhUIVtfg',
      description: "Grand Theft Auto 5.",
    },
    {
      id: 6,
      name: "Apple Airpods Max",
      price: "₹28,299",
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuxjRHF7AU0ywV1c5_Nz8sgfQUcFdeIhi7PTwAy5VWUInPAyyfjmCz92VKzFoYkacdtVaTkAg91vIegy43wg2v17LQoOCGDOfPCJMTgsk7X7iAiOpkRnodPwC0',
      description: "Apple Airpods Max.",
    },
  ];

  const [cart, setCart] = useState(getCartFromStorage());
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product) => {
    const priceNumber = Number(product.price.replace(/[^\d]/g, ''));
    const existing = cart.find(item => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { ...product, price: priceNumber, quantity: 1 }];
    }
    setCart(newCart);
    saveCartToStorage(newCart);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1000);
  };

  return (
    <React.Fragment>
      <CatagoriesHeader />

      <NavLink style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold', fontSize: '1.4rem', margin: '24px 0 0 24px', display: 'inline-block' }}>
        <p style={{ margin: 0 }}>Featured Tech Products</p>
      </NavLink>
      <div className={styles.HomePageCard}>
        {demoProducts.map(product => (
          <Card key={product.id} className={styles.productCard}>
            <img src={product.image.trim()} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <div className={styles.productFooter}>
              <span className={styles.productPrice}>{product.price}</span>
              <button
                className={styles.addToCartBtn}
                onClick={() => handleAddToCart(product)}
                disabled={addedId === product.id}
              >
                {addedId === product.id ? "Added!" : "Add to Cart"}
              </button>
            </div>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TechPage;