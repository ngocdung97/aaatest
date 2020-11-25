import React, { Component } from "react";
import Login from "./components/Login/loginComponent";
import { DB } from "./database/FirebaseConfig";
import Dashboard from "./components/Layout/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  componentWillMount() {
    DB.on("value", (value) => {
      const lst = [];
      value.forEach((item) => {
        lst.push(item.val());
      });
      this.setState({
        list: lst,
      });
    });
  }

  //loginComponent
  checkLogin = (user) => {
    if (this.state.list) {
      this.state.list.forEach((item) => {
        if (
          item.id === user.id &&
          item.password === user.password
        ) {
          alert("dang nhap thanh cong !");
          this.setState(
            {
              isLogin: true,
            },
            () => {
              this.renderDashboard();
            }
          );
        }
      });
    }
  };

  onLoginClick = (data) => {
    this.checkLogin(data);
  };

  renderLoginForm = () => {
    if (!this.state.isLogin) {
      return <Login onLoginClick={this.onLoginClick} />;
    }
  };
  renderDashboard = () => {
    if(this.state.isLogin===true){
      return <Dashboard />;
    }
    
  };

  render() {
    console.log(this.state);
    return <div>
      {this.renderLoginForm()}
      {this.renderDashboard()}
    </div>;
  }
}

export default App;
