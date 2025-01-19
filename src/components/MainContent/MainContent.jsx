import { useState } from "react";
import Hero from "../Hero/Hero";
import Filter from "../Filter/Filter";
import PhotoList from "../PhotoList/PhotoList";
import "./MainContent.scss";

export default function MainContent({ filtersOpen }) {
    const [activeFilter, setActiveFilter] = useState(null);
    return (
        <div className="main-content">
            {filtersOpen && (
                <Filter
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            )}
            <PhotoList activeFilter={activeFilter} />
        </div>
    )
}