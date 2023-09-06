// cartUtil.js

// Function to get the cart items from localStorage
export const getCartItems = () => {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  };
  
  // Function to add an item to the cart in localStorage
  export const addToCart = (item) => {
    const cartItems = getCartItems();
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
  // Function to remove an item from the cart in localStorage
  export const removeFromCart = (foodItemId) => {
    const cartItems = getCartItems();
    const updatedCart = cartItems.filter((item) => item.id !== foodItemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };
  
  
  
  
  
  