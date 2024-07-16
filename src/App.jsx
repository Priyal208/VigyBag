import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/Contacts/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Layout from "./Layout";
import Team from "./components/Team/Team";
import Confirmation from "./pages/Confirmation/Confirmation";
import Cancellation from "./pages/Cancellation/Cancellation";
import OrderDetails from "./pages/Order/Orderdetails";
import MyOrders from "./pages/Order/MyOrders";
import Dashboard_Orders from "./pages/Dashboard/dashboard_order";
import Dashboard_Cart from "./pages/Dashboard/dashboard_cart";
import Checkout from "./pages/Order/Checkout";
import Cart from "./pages/Order/Cart";
import Error from "./pages/404-Page/Error";
import ProductDetails from "./components/Products/ProductDetails";
import Help from "./pages/Help/Help";
import Privacy from "./pages/Privacy-Policy/Privacy";
import Payment from "./pages/Payment/Payment";
import ReturnAndCancellation from "./pages/ReturnAndCancellation/returnAndCancellation";
import EPRPage from "./pages/EPRPage/EPR_Page";
import Signup from "./pages/Signup/Signup";
import FAQ from "./pages/FAQ/Faq";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "./pages/TermsAndCondition/TermsAndCondition";
import FeedbackButton from "./components/FeedbackForm/FeedBtn";
import FeedbackModal from "./components/FeedbackForm/Feedback";

// Latest_In_Market
import LatestInMarket from "./pages/Latest_in_the_Market/LatestInMarket";
import HandMadeSoaps from "./pages/Latest_in_the_Market/HandMadeSoaps";
import ArtSupplies from "./pages/Latest_in_the_Market/ArtSupplies";
import CeramicDinnerware from "./pages/Latest_in_the_Market/CeramicDinnerware";
import BambooProducts from "./pages/Latest_in_the_Market/BambooProducts";
import StorageBaskets from "./pages/Latest_in_the_Market/StorageBaskets";
import OrganicSoaps from "./pages/Latest_in_the_Market/OrganicSoaps";
import OrganicTea from "./pages/Latest_in_the_Market/OrganicTea";
import NaturalCosmetics from "./pages/Latest_in_the_Market/NaturalCosmetics";

// Popular Categories
import PopularCategories from "./pages/Popular_Categories/Popular_Categories";
import BeautyWellness from "./pages/Popular_Categories/Beauty-Wellness";
import BodyCare from "./pages/Popular_Categories/Body-Care";
import CustomizedGifts from "./pages/Popular_Categories/Customized-Gifts";
import FashionAccessories from "./pages/Popular_Categories/Fashion-Accessories";
import FoodBeverages from "./pages/Popular_Categories/Food-Beverages";
import FurnitureDecor from "./pages/Popular_Categories/Furniture-Decor";
import HealthSupplements from "./pages/Popular_Categories/Health-Supplements";
import PrintingStationery from "./pages/Popular_Categories/Printing-Stationery";
import AdminPanel from "./Admin/Admin_Panel";
import ProductForm from "./Admin/ProductForm";
import Certifications from "./pages/Certifications/Certifications";

import AdditionalDetails from "./pages/AdditionalDetails.jsx";

import VigyForm from "./Admin/VigyForm";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Latest in the Market */}
        <Route path="latestInMarket" element={<LatestInMarket />} />
        <Route
          path="latestInMarket/handMadeSoaps"
          element={<HandMadeSoaps />}
        />
        <Route path="latestInMarket/artSupplies" element={<ArtSupplies />} />
        <Route
          path="latestInMarket/ceramicDinnerware"
          element={<CeramicDinnerware />}
        />
        <Route
          path="latestInMarket/bambooProducts"
          element={<BambooProducts />}
        />
        <Route
          path="latestInMarket/storageBaskets"
          element={<StorageBaskets />}
        />
        <Route path="latestInMarket/organicSoaps" element={<OrganicSoaps />} />
        <Route path="latestInMarket/organicTea" element={<OrganicTea />} />
        <Route
          path="latestInMarket/naturalCosmetics"
          element={<NaturalCosmetics />}
        />

        {/* PopularCategories */}
        <Route path="popularCategories" element={<PopularCategories />} />
        <Route
          path="popularCategories/beautyWellness"
          element={<BeautyWellness />}
        />
        <Route path="popularCategories/bodyCare" element={<BodyCare />} />
        <Route
          path="popularCategories/customizedGifts"
          element={<CustomizedGifts />}
        />
        <Route
          path="popularCategories/fashionAccessories"
          element={<FashionAccessories />}
        />
        <Route
          path="popularCategories/foodBeverages"
          element={<FoodBeverages />}
        />
        <Route
          path="popularCategories/furnitureDecor"
          element={<FurnitureDecor />}
        />
        <Route
          path="popularCategories/healthSupplements"
          element={<HealthSupplements />}
        />
        <Route
          path="popularCategories/printingStationery"
          element={<PrintingStationery />}
        />
        <Route path="feedback" element={<FeedbackModal />} />

        <Route path="about" element={<AboutUs />} />
        <Route path="help" element={<Help />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        <Route path="login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="confirm" element={<Confirmation />} />
          <Route path="cancel" element={<Cancellation />} />
          <Route path="orderDetails" element={<OrderDetails />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="productDetails" element={<ProductDetails />} />
          <Route path="payment" element={<Payment />} />
          <Route path="dashboard_order" element={<Dashboard_Orders />} />
          <Route path="dashboard_cart" element={<Dashboard_Cart />} />
        </Route>

        <Route
          path="returnAndCancellation"
          element={<ReturnAndCancellation />}
        />
        <Route path="EPR_Page" element={<EPRPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="termsAndCondition" element={<TermsAndConditions />} />

        <Route path="*" element={<Error />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="vigy_form" element={<VigyForm />} />
        <Route path="product_form" element={<ProductForm />} />
        <Route path="certificate" element={<Certifications />} />
      </Route>
    </Routes>
  );
}
