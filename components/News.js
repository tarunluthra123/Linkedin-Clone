import React from "react";
import NewsItem from "./NewsItem";

const News = () => {
    return (
        <div className="bg-gray-50 pr-10 rounded-md p-4 border-2 border-solid border-gray-300">
            <h4 className="font-bold text-gray-700 text-lg mb-2">
                LinkedIn News
            </h4>
            <div className="list-inside">
                <NewsItem
                    heading="4.03 lakh new cases, 4092 deaths"
                    description="Top news • 25,704 readers"
                />
                <NewsItem
                    heading="Pfizer vaccine approved for over 12"
                    description="7h ago	• 15,334 readers"
                />
                <NewsItem
                    heading="How to spot a bad manager"
                    description="1d ago • 101,838 readers"
                />
                <NewsItem
                    heading="Job interviews getting deferred"
                    description="23h ago • 4,406 readers"
                />
            </div>
        </div>
    );
};

export default News;
