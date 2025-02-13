import { Link } from "react-router-dom";
import "./PhotoCard.scss";

export default function PhotoCard({ photo }) {
    return (
        <section className="photo-card">
            <div className="photo-wrapper">
                <Link to={`photo/${photo.id}`}> <img className="photo-wrapper__photo" src={photo.photo} /></Link>
                <div className="photo-wrapper__photographer"> <p>{photo.photographer}</p></div>
            </div>
            <ul className="photo-tags">
                {photo.tags.map((tag) => {
                    return <li key={tag} className="photo-tags__tag-item"><p>{tag}</p></li>;
                })}
            </ul>
        </section >
    );
}