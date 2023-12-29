import moment from "moment";
function BooksItem({ item }) {
  return (
    <div className="m-2">
      <h1 className="m-2 font-bold text-xl"> {item.bookName}</h1>
      <img
        src={item.image}
        width={200}
        height={200}
        className="m-2 rounded-full"
      />
      <div className="font-semibold">Bestseller: <input type="checkbox" checked= {(item.bestseller).toString()}></input></div>
      <div>{moment(item.createdDate).fromNow()}</div>
    </div>
  );
}

export default BooksItem;
