import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComments = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (props.asin > 0) {
      fetchComments();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  // console.log("asin",props.asin);
  return (
    <>
      <h2 className="mt-2">Commenti {isLoading && <Spinner animation="grow" />}</h2>
      {comments.length > 0 ? <CommentList fetchComments={fetchComments} comments={comments} /> : <Alert> Seleziona un libro per visualizzare i commenti!</Alert>}
      {props.asin.length > 0 && <AddComment asin={props.asin} fetchComments={fetchComments} />}
    </>
  );
};
export default CommentArea;
