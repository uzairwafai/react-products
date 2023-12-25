import React from "react";
import axios from "axios";
class Users extends React.Component {
  state = {
    users: [],
  };

  constructor() {
    super();
    axios
      .get("https:api.github.com/users")
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1 className="text-xl font-semibold ml-2 mb-4">Github Users</h1>
        <div className="grid grid-cols-4 ml-4">
          {this.state.users.map((item) => (
            <div>
              <h1> {item.login}</h1>
              <img src={item.avatar_url} width ={200} height ={200} className="m-2 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
