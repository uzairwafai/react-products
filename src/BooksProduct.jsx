import React from "react";
import axios from "axios";
import BooksItem from "./BooksItem";
import Error from "../util/Error";
import Loader from "../util/Loader";
import ShouldRender from "../util/ShouldRender/ShouldRender";
class Books extends React.Component {
  state = {
    books: [],
    hasError: false,
    loading: true,
  };

  constructor() {
    super();
    setTimeout(() => {
      axios
        .get("https://books-api-cloud.onrender.com/api/books")
        .then((res) => {
          this.setState({ books: res.data.data });
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
        <h1 className="text-xl font-semibold ml-2 mb-4">Own API rendering</h1>
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
        <div className=" m-4">
          {this.state.books.map((list) => (
            <BooksItem key={list._id} item={list} />
          ))}
        </div>
      </div>
    );
  }
}

export default Books;
