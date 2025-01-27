import { useState } from "react";
import axios from "axios";
import "./CommentForm.scss";

export default function CommentForm({ photoId, comments, setComments }) {
    const [name, setName] = useState();

    const [comment, setComment] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post(
            `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${window.apikey}`,
            { name: name, comment: comment },
            { "Content-Type": "application/json" }
        );
        setName("");
        setComment("");
        setComments([response.data, ...comments]);
    }

    return (<form className="form-field" onSubmit={handleSubmit}>
        <label htmlFor="form-field__name-field">Name</label>
        <input type="text" id="form-field__name-field" value={name} onChange={handleNameChange} />
        <label htmlFor="form-field__comment-field">Comment</label>
        <textarea id="form-field__comment-field" value={comment} onChange={handleCommentChange} />
        <button type="form-field__submit">Submit</button>
    </form>)
}