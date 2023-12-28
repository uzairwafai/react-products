import React from "react";
import axios from "axios";
import UserItem from "./UserItem";
import Error from "../util/Error";
import Loader from "../util/Loader";
import ShouldRender from "../util/ShouldRender/ShouldRender";
class Users extends React.Component {
  state = {
    users: [],
    hasError: false,
    loading: true,
  };

  constructor() {
    super();
    setTimeout(() => {
      axios
        .get("https:api.github.com/users")
        .then((res) => {
          this.setState({ users: res.data });
        })
        .catch((err) => {
          this.setState({ hasError: true });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1 className="text-xl font-semibold ml-2 mb-4">Github Users</h1>
        {/* <div>{this.state.loading ? <Loader /> : null}</div> */}

        <ShouldRender cond={this.state.loading}>
          <Loader />
        </ShouldRender>

        {/* {this.state.hasError ? (
          <Error message="Something went wrong, please try again" />
        ) : null} */}
        <ShouldRender cond={this.state.hasError}>
          <Error />
        </ShouldRender>
        <div className="grid grid-cols-4 ml-4">
          {this.state.users.map((list) => (
            <UserItem key={list.login} item={list} />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
