import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZjk3OTdjMjM5YzAwMTUyZjRiM2IiLCJpYXQiOjE3MTk0ODcxNTcsImV4cCI6MTcyMDY5Njc1N30.cnWiTJ8Skk8km6KUyP5pIXFi42u-vAP3LJVqlx_JKd8",
        },
      });
      if (response.ok) {
        const result = await response.json();
        setComments(result);
        // console.log(comments);
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  console.log(props.asin);
  return (
    <>
      <h2 className="mt-2">Commenti</h2>
      {comments.length > 0 ? <CommentList comments={comments} /> : <Alert> Non ci sono commenti</Alert>}
      {props.asin.length > 0 && <AddComment asin={props.asin} />}
    </>
  );
};
export default CommentArea;
