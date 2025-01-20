import "./PhotoCard.scss";

export default function PhotoCard({ photo }) {
    return (
        <div className="photo-card">

            <img className="photo-card__photo" src={photo.photo} />
            <p className="photo-card__photographer"> {photo.photographer}</p>

            <div class="photo-card__tags">
                {photo.tags.map((tag) => {
                    return <p>{tag}</p>;
                })}
            </div>
        </div >
    );
}