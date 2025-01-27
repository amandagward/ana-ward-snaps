import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './PhotoPage.scss';
import PhotoDetailCard from "../../components/PhotoDetailCard/PhotoDetailCard";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentsList/CommentList";
import Footer from '../../components/Footer/Footer';

function PhotoPage() {
    const params = useParams();
    const [photo, setPhoto] = useState(null);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const fetchPhoto = async () => {
            const response = await axios.get(
                `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${params.id}?api_key=${window.apikey}`
            );
            setPhoto(response.data);
        };
        fetchPhoto();
    }, [params.id]);
    return (
        <>
            <header className="header">
                <Link to="/" className="header__logo">Snaps</Link>
                <Link to="/" className="header__backlink">
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292892 6.7929C-0.0976315 7.18342 -0.0976314 7.81658 0.292893 8.20711L6.65686 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819458 8.07107 0.428933C7.68054 0.038409 7.04738 0.038409 6.65685 0.428933L0.292892 6.7929ZM21 6.5L1 6.5L1 8.5L21 8.5L21 6.5Z" fill="#1E6655" />
                    </svg>
                    Home
                </Link>
            </header>
            <div className="photo-page">
                <div className="photo-detail-card">
                    {photo != null ? <PhotoDetailCard photo={photo} /> : <></>}
                </div>
                <div className="comment-form">
                    <CommentForm photoId={params.id} comments={comments} setComments={setComments} />
                </div>
                <div className="comment-list">
                    <CommentList photoId={params.id} comments={comments} setComments={setComments} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PhotoPage;