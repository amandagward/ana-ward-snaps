import "./PhotoCard.scss";

export default function PhotoCard({ photo }) {
    return (
        <div className="photo-card">
            <img src={photo.photo} />
            <p> {photo.photographer}</p>
            <div>
                {photo.tags.map((tag) => {
                    return <p>{tag}</p>;
                })}
            </div>
        </div>
    );
}