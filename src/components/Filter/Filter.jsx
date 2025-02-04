import { useState, useEffect } from "react";
import axios from "axios";
import "./Filter.scss";

export default function Filter({ activeFilter, setActiveFilter }) {

    const [tags, setTags] = useState([]);
    useEffect(() => {
        const fetchTags = async () => {
            const response = await axios.get(
                `http://localhost:8080/tags`
            );
            setTags(response.data);
        };
        fetchTags();
    }, []);

    const handleTagClick = (tagClicked) => {
        console.log(`${tagClicked} tag clicked`);
        if (tagClicked === activeFilter) {
            setActiveFilter(null);
        } else {
            setActiveFilter(tagClicked);
        }
    };

    return (
        <div className="filter-list">
            <p className="filter-list__title">Filters</p>
            <div className="filter-list__container">
                {tags.map((tag, index) => {
                    return (
                        <span
                            key={index}
                            className={`filter ${activeFilter === tag ? "filter--active" : ""
                                }`}
                            onClick={() => handleTagClick(tag)}
                        >
                            {tag}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}