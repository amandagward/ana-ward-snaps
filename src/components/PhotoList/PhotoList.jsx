import { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoList.scss";

export default function PhotoList({ activeFilter }) {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await axios.get(
                `https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${window.apikey}`
            );
            setPhotos(response.data);
        };
        fetchPhotos();
    }, []);

    let filteredPhotos = photos.filter((photo) => {
        if (activeFilter === null) {
            return true;
        } else if (photo.tags.includes(activeFilter)) {
            return true;
        } else {
            return false;
        }
    });

    return (
        <div className="photo-list">
            {filteredPhotos.map((photo) => {
                return <PhotoCard key={photo.id} photo={photo} />;
            })}
        </div>
    );
}