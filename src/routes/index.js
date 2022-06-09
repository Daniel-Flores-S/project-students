import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/auth";
import Home from "../pages/home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Private = ({ Item }) => {
  const token = localStorage.getItem("user_token");
  return token ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <AuthProvider>
          <Routes>
            <Route exact path="/home" element={<Private Item={Home} />} />
            <Route path="/" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="*" element={<Signin />} />
          </Routes>{" "}
        </AuthProvider>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
