import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  fetchComment = () => {
    const URL = `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`;

    fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjE2YjhhZDEyOTAwMTU4NzZjNzEiLCJpYXQiOjE3MzMyNDAxOTQsImV4cCI6MTczNDQ0OTc5NH0.p9Cr1gBd544Zb4tbMashDAem6s-XRwudrMFbGMgDVxw",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json(); // Assicurati che questa parte venga eseguita correttamente
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((commenti) => {
        console.log("DATI RICEVUTI:", commenti); // Aggiungi un log per verificare cosa contiene commenti
        this.setState({ comments: commenti });
      })
      .catch((error) => {
        console.error("Errore:", error); // Log degli errori
      });
  };

  componentDidMount() {
    this.fetchComment();
  }

  render() {
    console.log(this.state.comments[0]);
    return (
      <div>
        <h3>COMMENTI LEGATI AL LIBRO</h3>
        <ListGroup>
          {this.state.comments.map((comment) => {
            return <ListGroup.Item>{comment.comment}</ListGroup.Item>;
          })}
        </ListGroup>
      </div>
    );
  }
}

export default CommentArea;
