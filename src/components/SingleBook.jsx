import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
  return (
    <Card className="book-cover d-flex flex-column">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
