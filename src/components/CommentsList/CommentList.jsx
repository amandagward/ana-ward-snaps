import { useState, useEffect } from "react";
import axios from "axios";
import "./CommentList.scss";

export default function CommentList({ photoId, comments, setComments }) {
    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios.get(
                `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${window.apikey}`
            );
            setComments(response.data.sort((a, b) => { return b.timestamp - a.timestamp }));
        };
        fetchComments();
    }, [photoId]);

    return (
        <div className="comment-list">
            {comments.map((comment) => {
                return <div key={comment.id}>{comment.comment}</div>;
            })}
        </div>
    );
};