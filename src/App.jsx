import Header from "./Header";
import Footer from "./Footer";
import Display from "./Display";
import MainArea from "./MainArea";
import { PI, add as addition } from "./math";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <Header></Header>
      <Display />
      <h1>{PI}</h1>
      <h3>{addition(2, 10)}</h3>
      <MainArea fname="Uzair" lname="Wafai"></MainArea>
      <MainArea fname="Asif" lname="Rawloo"></MainArea>
      <hr></hr>
      <ProductList></ProductList>
      <Footer></Footer>
    </div>
  );
}

export default App;

// function
// null or UI
