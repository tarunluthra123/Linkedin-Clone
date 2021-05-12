import React from "react";

const LoadingPage = () => {
    return (
        <div className="h-full w-80 text-center pt-40  overflow-visible mx-auto">
            <img src="/linkedin_logo_blue.png" className="w-80 mx-auto" />
            <div className="w-full px-10%">
                <div className="h-2 bg-gray-300 relative rounded-md mt-10 ">
                    <div className="loading-bar absolute w-5 top-0 left-0 bottom-0 bg-blue-400"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
