import DashboardContainer from "./Dashboard";
import LoginContainer from "./Login";
import NavigationComponent from "./components/Navigation";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pages, UserConfig } from "./types";

function MyRoutes(): React.ReactElement {
  const url = window.location.pathname;
  const isUserLoggedIn = localStorage.getItem(UserConfig.AccessToken);

  if (url === Pages.Login || url === Pages.Home) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/" element={<LoginContainer />} />
        </Routes>
      </BrowserRouter>
    );
  }

  if (!isUserLoggedIn && (url === Pages.Login || url === Pages.Home)) {
    window.location.href = Pages.Login;
    return <></>;
  }

  return (
    <BrowserRouter>
      <NavigationComponent>
        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path={Pages.Login} element={<LoginContainer />} />
          <Route path={Pages.Dashboard} element={<DashboardContainer />} />
        </Routes>
      </NavigationComponent>
    </BrowserRouter>
  );
}

export default MyRoutes;
