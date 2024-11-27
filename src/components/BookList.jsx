import { Container } from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";

const BookList = () => {
  return (
    <Container>
      <Row>
        <Col>
          {fantasy.map((book) => {
            <SingleBook title={book.title} img={book.img} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
