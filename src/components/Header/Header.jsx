import React, { useContext, useEffect, useState } from "react";
import BoxIcon from "./components/BoxIcon/BoxIcon";
import {
  boxIconArr,
  menuArr
} from "~/assets/ContentArrProject/Header/MenuAndIcon";

import Menu from "./components/Menu/Menu";
import "./style.scss";
import SearchToggle from "./components/SearchToggle/SearchToggle";
import MenuToggle from "./components/MenuToggle/MenuToggle";
import { useScrollHandling } from "~/hooks/useScrollHandling";
import { SidebarContext } from "~/contexts/SidebarProvider";
import { StoreContext } from "~/contexts/StoreProvider";
import { cartService } from "~/apis/cartService";
import { favoriteService } from "~/apis/favoriteService";
import { SearchContext } from "~/contexts/SearchProvider";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { setIsOpenSidebar, titleSidebar, setTitleSidebar } =
    useContext(SidebarContext);
  const { setIsOpenSearchFunction } = useContext(SearchContext);

  const { scrollCurrentPosition } = useScrollHandling();
  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
    setFixedNavbar(scrollCurrentPosition >= 100);
  }, [scrollCurrentPosition]);
  const location = useLocation();

  const {
    userInfo,
    setListItemFavorite,
    setCountItemFavor,
    setListItemCart,
    totalItem,
    setCountItem,
    isOnclick
  } = useContext(StoreContext);

  useEffect(() => {
    if (userInfo) {
      cartService
        .getAllCart({ userId: userInfo._id })
        .then((res) => {
          setListItemCart(res.data);
          setCountItem(totalItem(res.data));
        })
        .catch((err) => {
          console.log(err);
        });

      favoriteService
        .getAllFavorite({ userId: userInfo._id })
        .then((res) => {
          setListItemFavorite(res.data);
          setCountItemFavor(res.data.length);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCountItem(0);
      setCountItemFavor(0);
    }
  }, [userInfo, isOnclick]);

  return (
    <>
      <div
        className={`${
          fixedNavbar
            ? "navbar text-black"
            : location.pathname !== "/"
            ? "text-black"
            : "text-white"
        }`}
      >
        <div className="container flex flex-col xl:flex-row justify-center items-center py-5">
          {/* Left content */}
          <div className="flex xl:w-1/3 justify-between">
            <div className="flex justify-between items-center space-x-2">
              {boxIconArr.slice(0, 3).map((item) => (
                <BoxIcon icon={item.icon} to={item.to} />
              ))}
            </div>
            {menuArr.slice(0, 3).map((item) => (
              <Menu
                title={item.title}
                to={item.to}
                setIsOpenSidebar={setIsOpenSidebar}
              />
            ))}
          </div>

          {/* Center content */}
          <div className="text-center relative w-full xl:w-1/3">
            <SearchToggle />
            <MenuToggle />

            <div className="">
              <h2 className="text-5xl">Shoes Store</h2>
              <p>NGUYENDANG</p>
            </div>
          </div>

          {/* Right content */}
          <div className="flex xl:w-1/3 justify-between">
            {menuArr.slice(3, menuArr.length).map((item) => (
              <Menu
                title={item.title}
                to={item.to}
                setIsOpenSidebar={setIsOpenSidebar}
                titleSidebar={titleSidebar}
                setTitleSidebar={setTitleSidebar}
                setIsOpenSearchFunction={setIsOpenSearchFunction}
              />
            ))}
            <div className="flex justify-between items-center space-x-2 ">
              {boxIconArr.slice(3, boxIconArr.length).map((item) => (
                <BoxIcon
                  icon={item.icon}
                  to={item.to}
                  title={item.title}
                  bgColor="bg-black"
                  textColor="text-black"
                  setIsOpenSidebar={setIsOpenSidebar}
                  titleSidebar={titleSidebar}
                  setTitleSidebar={setTitleSidebar}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
