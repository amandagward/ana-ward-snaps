import tags from "../../data/tags.json";
import "./Filter.scss";

export default function Filter({ activeFilter, setActiveFilter }) {
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
    )
}