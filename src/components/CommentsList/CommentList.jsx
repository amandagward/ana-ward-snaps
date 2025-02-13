import { useState, useEffect } from "react";
import axios from "axios";
import "./CommentList.scss";

export default function CommentList({ photoId, comments, setComments }) {
    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios.get(
                `http://localhost:8080/photos/${photoId}/comments`
            );
            setComments(response.data.sort((a, b) => { return b.timestamp - a.timestamp }));
        };
        fetchComments();
    }, [photoId]);

    return (
        <div className="comment-list">
            <div className="comment-count">
                {comments.length} Comment{comments.length === 1 ? "" : "s"}
            </div>
            {comments.map((comment) => {
                return <div key={comment.id}>
                    <div className="comment-info">
                        <div className="comment-info__name">{comment.name}</div>
                        <div className="comment-info__date">{new Date(comment.timestamp).toLocaleDateString()}</div>
                    </div> {comment.comment}</div>;
            })}
        </div>
    );
};