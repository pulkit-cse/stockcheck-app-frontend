import { useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/addProduct/AddProduct";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import ProductDetail from "./components/product/productDetail/ProductDetail";
import EditProduct from "./pages/editProduct/EditProduct";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Contact from "./pages/contact/Contact";



axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status))
    }
    loginStatus();
  }, [dispatch]);
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/forgot" element={<Forgot/>}></Route>
        <Route path="/resetpassword/:resetToken" element={<Reset/>}></Route>

        <Route path="/dashboard" element={
          <Sidebar>
            <Layout>
              <Dashboard></Dashboard>
            </Layout>
          </Sidebar>

        }/>
        <Route path="/add-product" element={
          <Sidebar>
            <Layout>
              <AddProduct></AddProduct>
            </Layout>
          </Sidebar>

        }/>
        <Route path="/product-detail/:id" element={
          <Sidebar>
            <Layout>
              <ProductDetail></ProductDetail>
            </Layout>
          </Sidebar>

        }/>
        <Route path="/edit-product/:id" element={
          <Sidebar>
            <Layout>
              <EditProduct></EditProduct>
            </Layout>
          </Sidebar>

        }/>
        <Route path="/profile" element={
          <Sidebar>
            <Layout>
              <Profile></Profile>
            </Layout>
          </Sidebar>
        }/>
        <Route path="/edit-profile" element={
          <Sidebar>
            <Layout>
              <EditProfile></EditProfile>
            </Layout>
          </Sidebar>
        }/>
        <Route path="/contact-us" element={
          <Sidebar>
            <Layout>
              <Contact></Contact>
            </Layout>
          </Sidebar>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
