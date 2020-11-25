import React, { Component } from "react";
import Header from "./Header";
import Hopdongxemay from "./Hopdongxemay";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Hopdongxemay/>
      </div>
    );
  }
}

export default Dashboard;
