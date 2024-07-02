import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    selected: false,
    comments: [],
  };

  fetchComments = async () => {
    this.setState({ selected: true });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk3OTdjMjM5YzAwMTUyZjRiM2IiLCJpYXQiOjE3MTk0ODcxNTcsImV4cCI6MTcyMDY5Njc1N30.cnWiTJ8Skk8km6KUyP5pIXFi42u-vAP3LJVqlx_JKd8",
        },
      });
      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments: comments });
        // console.log(comments);
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      console.log("asin changed");
      this.fetchComments();
    } else {
      console.log("no asin changed");
    }
  }

  componentDidMount() {
    // this.fetchComments();
  }

  render() {
    console.log(this.props.asin);
    return (
      <>
        <h2 className="mt-2">Commenti</h2>
        {this.state.comments.length > 0 ? <CommentList comments={this.state.comments} /> : <Alert> Non ci sono commenti</Alert>}
        {this.props.asin.length > 0 && <AddComment asin={this.props.asin} />}
      </>
    );
  }
}
export default CommentArea;
