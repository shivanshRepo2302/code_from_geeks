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

const FashionPage = () => {
  const demoProducts = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "₹3,999",
      image:' https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRC7lGZRYkZ4J-iPuxBPS2IwIKRbvZzjFQvBTGBpYJFWZWHm9l4aj3_kSPFllBubElya98Sh_G31IeaaDdG-oKW8z7VvM3zODQxS90l0uiztDMFX3C37IPbqhY',
      description: "Nike Air Max."
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: "₹3,499",
      image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/22443e22c00d4acd9a76fc746d82fc00_9366/Ultraboost_5_Shoes_White_ID8813_HM3_hover.jpg",
      description: "Adidas Ultraboost 5."
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: "₹2,299",
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcST8yiEgOC__s8I7DYDrE1pT7pbpnGSWdiu0qkyGOqZQ_HBeHS4zATx2Ai6UyReBLyJESNSVkVk4-VF_rF1UGUfu0mMf_ijtJDoOEp5kLRSMUmAmoTnE-oJeg',
      description: "Puma RS-X.",  
    }
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
        <p style={{ margin: 0 }}>Featured Fashion Products</p>
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
}

export default FashionPage;