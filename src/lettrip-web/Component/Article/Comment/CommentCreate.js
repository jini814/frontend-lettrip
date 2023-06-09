import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { commentData, createComment } from "../../../Service/ArticleService";

import Comments from "./Comments";

import "./Comments.css";

function CommentCreate() {
  const { id } = useParams();
  const [userEmail, setUserEmail] = useState("");

  const [comments, setComments] = useState([]);

  const [commentForm, setCommentForm] = useState({
    article_id: id,
    content: "",
  }); //댓글 작성시 요청 정보

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    // 로그인 여부 확인하기
    const storedEmail = localStorage.getItem("email");
    console.log(storedEmail);
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
    console.log(userEmail);
  }, []);

  //댓글 불러오기
  const fetchComments = () => {
    const pageForm = {
      page: 0,
      size: 5,
      sort: "id,ASC",
      article_id: id,
    };
    commentData(pageForm)
      .then((response) => {
        setComments(response.content);
      })
      .catch((e) => {
        console.log(e);
        alert("댓글을 불러오는 중에 오류가 발생했습니다.");
      });
  };

  //댓글 작성하기
  const handleCommentFormChange = (e) => {
    const changedField = e.target.name;
    let newValue = e.target.value;
    setCommentForm({
      ...commentForm,
      [changedField]: newValue,
    });
  };
  const handleCommentFormSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("댓글을 작성하시겠습니까?")) {
      createComment(commentForm)
        .then((response) => {
          alert("댓글 작성이 완료되었습니다.");
          console.log(response);
          console.log(userEmail);
          setCommentForm({ ...commentForm, content: "" });
          fetchComments();
        })
        .catch((e) => {
          console.log(e);
          alert("댓글 작성에 실패했습니다. 다시 시도해주시길 바랍니다.");
        });
    }
  };

  return (
    <div className='comment-container'>
      <h2>댓글</h2>
      <div className='comment-create'>
        <form onSubmit={handleCommentFormSubmit}>
          <div className='comment-input'>
            <textarea
              id='content'
              name='content'
              placeholder='댓글을 입력하세요.'
              required
              value={commentForm.content}
              onChange={handleCommentFormChange}
            />
            <button type='submit'>등록</button>
          </div>
        </form>
      </div>
      <div className='showcomment'>
        <Comments userEmail={userEmail} />
      </div>
    </div>
  );
}
export default CommentCreate;
