import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    const savedUser = localStorage.getItem("userInfo");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // onlick
  const [isOnclick, setIsOnclick] = useState(false);
  const setIsOnClickFunction = (value) => {
    setIsOnclick(value);
  };
  // list favorite
  const handleFavoriteItem = (list, proId) => {
    return list?.some((items) => {
      const { item } = items;
      return item.productId === proId;
    });
  };

  //  favorite
  const [listItemFavorite, setListItemFavorite] = useState(null);
  const [countItemFavor, setCountItemFavor] = useState(0);
  const setCountItemFavorFunction = (value) => {
    setCountItemFavor(value);
  };
  const setListItemFavoriteFunction = (value) => {
    setListItemFavorite(value);
  };

  // list cart
  const [listItemCart, setListItemCart] = useState(null);
  const [countItem, setCountItem] = useState(0); // count of list cart
  // checkout payment
  const [coupon, setCoupon] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);

  // order on payment
  const [order, setOrder] = useState(null);
  const setOrderFunction = (value) => {
    setOrder(value);
  };

  // total price
  const totalPrice = (list) => {
    let total = 0;
    list.forEach(({ item }) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  // total item
  const totalItem = (list) => {
    if (!list) return 0;
    let total = 0;
    list.forEach(({ item }) => {
      total += item.quantity;
    });

    return total;
  };

  return (
    <StoreContext.Provider
      value={{
        setIsOnClickFunction,
        isOnclick,
        userInfo,
        setUserInfo,
        // favorite
        handleFavoriteItem,
        listItemFavorite,
        setListItemFavoriteFunction,
        countItemFavor,
        setCountItemFavorFunction,
        // cart
        listItemCart,
        setListItemCart,
        totalPrice,
        totalItem,
        countItem,
        setCountItem,
        coupon,
        setCoupon,
        currentTab,
        setCurrentTab,
        order,
        setOrderFunction
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
