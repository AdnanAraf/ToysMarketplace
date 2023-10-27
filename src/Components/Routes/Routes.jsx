import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Login from "../Pages/Login";
import Home from "../Home/Home";
import Home1 from "../Home/Home1";
import Signup from "../Pages/Signup";
import CategoriesDetailsCard from "../Categories/CategoriesDetailsCard/CategoriesDetailsCard";
import AddProducts from "../Products/AddProducts/AddProducts";
import AllProducts from "../Products/AllProducts/AllProducts";
import MyProducts from "../Products/MyProducts";
import UpdateProduct from "../Products/UpdateProduct/UpdateProduct";
import Shop from "../Products/Shop/Shop";
import Payment from "../Payment/Payment";
import SingleCard from "../Products/Shop/SingleCard/SingleCard";
import UpdateCount from "../Products/UpdateCount/UpdateCount";
// import FeatureProductCard from "../FeaturedProduct/featureProductCard";
import UpdateCountCard from "../Products/UpdateCount/UpdateCountCard/UpdateCountCard";
import WishListCard from "../WishList/WishListCard";
import FeatureProductCard from "../FeaturedProduct/FeatureProductCard";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Signup />,
      },
      {
        path: "/details/:_id",
        element: <CategoriesDetailsCard />,
        loader: ({ params }) =>
          fetch(
            `https://toys-server-adnanaraf.vercel.app/CategoriesCollection/${params.id}`
          ),
      },
      {
        path: "Addproduct",
        element: <AddProducts />,
      },
      {
        path: "Allproduct",
        element: <AllProducts />,
      },
      {
        path: "mytoys",
        element: <MyProducts />,
      },
      {
        path: "update/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(
            `https://toys-server-adnanaraf.vercel.app/ToysData/${params.id}`
          ),
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "Heart",
        element: <WishListCard />,
      },
      {
        path: "addcard/:id",
        element: <SingleCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/AllProduct/${params.id}`),
      },
      {
        path: "updateCount/:id",
        element: <UpdateCountCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/carts/${params.id}`),
      },
      {
        path: "detailscart/:id",
        element: <FeatureProductCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/FeatureProduct/${params.id}`),
      },
    ],
  },
]);
export default Routes;
