import "./PhotoDetailCard.scss";

export default function PhotoDetailCard({ photo }) {
    return (
        <section className="photo-card">
            <div className="photo-wrapper">
                <img className="photo-wrapper__photo" src={photo.photo} />
            </div>
            <ul className="photo-tags">
                {photo.tags.map((tag) => {
                    return <li key={tag} className="photo-tags__tag-item"><p>{tag}</p></li>;
                })}
            </ul>
        </section >
    );
}