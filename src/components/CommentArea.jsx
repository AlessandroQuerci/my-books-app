import { Component } from "react";

class CommentArea extends Component {
  state = {
    Comments: [],
  };
  fetchComment = () => {
    const URL = `https://striveschool-api.herokuapp.com/api/comments/`;
    fetch(URL, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjE2YjhhZDEyOTAwMTU4NzZjNzEiLCJpYXQiOjE3MzI4MDc0MTQsImV4cCI6MTczNDAxNzAxNH0.VYF1Plgi1GkV_IzyJGlneHTdlp7zXnP8pCGIBFvCY98",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json();
        } else {
          throw new Error("errore nella richiesta");
        }
      })
      .then((comments) => {
        console.log("DATI RICEVUTI:", comments);
        this.setState({
          Comment: comments,
        });
      });
  };

  render() {
    return (
      <div>
        <h3>COMMENTI LEGATI AL LIBRO</h3>
      </div>
    );
  }
}

export default CommentArea;
