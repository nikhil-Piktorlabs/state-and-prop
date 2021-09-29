import React from "react";
import TopBar from "./components/topbar/topBar";
import SideBar from "./components/sidebar/sideBar";
import Main from "./components/main/main";

const App = () => {
  return (
    <React.Fragment>
      <TopBar />
      <SideBar />
      <Main />
    </React.Fragment>
  );
};

export default App;
