function MainArea(props) {
  return (
    <div>
      <p>
        My first name is {props.fname} and the last name is {props.lname}
      </p>
      {(1 == 1).toString()}
    </div>
  );
}

export default MainArea;
