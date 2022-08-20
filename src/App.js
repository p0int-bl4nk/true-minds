import React, { useState } from 'react';
import Body from './components';
import Header from './components/Header';
import './App.css';
import Toasty from './components/Toasty';

const DataContext = React.createContext({});
export const useData = () => React.useContext(DataContext);

function App() {
  const [cart, setCart] = useState({});
  const addToCart = (fund) => { setCart({ ...cart, [fund.id]: fund }); };
  const removeFromCart = (fund) => { setCart({ ...cart, [fund.id]: undefined }); };

  const [toastMessage, setToastMessage] = useState(null);
  const showToast = (message) => { setToastMessage(message); };
  const hideToast = () => { setToastMessage(null); };

  const contextData = {
    cart,
    addToCart,
    removeFromCart,
    showToast,
    hideToast
  };


  // console.log('cart >>>>>>>', cart);

  return (
    <div className="container">
      <DataContext.Provider value={contextData}>
        <Header />
        <Toasty message={toastMessage} />
        <Body />
      </DataContext.Provider>
    </div>
  );
}

export default App;
