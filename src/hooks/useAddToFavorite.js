import { useContext, useEffect, useState } from "react";
import { favoriteService } from "~/apis/favoriteService";
import { StoreContext } from "~/contexts/StoreProvider";
import { ToastifyContext } from "~/contexts/ToastifyProvider";

export const useAddToFavorite = (product, isWishList) => {
  const { toast } = useContext(ToastifyContext);
  const [favoriteId, setFavoriteId] = useState(null);
  const { listItemFavorite, setIsOnClickFunction, userInfo } =
    useContext(StoreContext);

  useEffect(() => {
    favoriteService
      .findOneByProductId({ productId: product._id })
      .then((res) => {
        setFavoriteId(res.data?._id);
      })
      .catch();
  }, [listItemFavorite]);
  const handleToFavorite = () => {
    if (!isWishList) {
      if (!userInfo) {
        toast.warning("Must be sign in!");
        setIsOpenSidebar(true);
        setTitleSidebar({ ...titleSidebar, title: "Sign in" });
        return;
      }

      const data = {
        userId: userInfo._id,
        item: {
          productId: product._id,
          name: product.name,
          image: product.images[0],
          price: product.price
        }
      };

      favoriteService
        .createItem(data)
        .then((res) => {
          toast.success(res.data.message);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something wrong!");
        });
    } else {
      favoriteService
        .deleteFavorite({ favoriteId })
        .then(() => {
          toast.success("Delete successfully!");
        })
        .catch();
    }
    setIsOnClickFunction((prev) => !prev);
  };

  return { handleToFavorite };
};
