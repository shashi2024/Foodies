// import React, { useState } from "react";
// import axios from "axios";

// const NewChallenge = () => {
//     const [recipeVideoUrl, setRecipeVideoUrl] = useState("");
//     const [startDate, setStartDate] = useState("");
//     const [startTime, setStartTime] = useState("");
//     const [endTime, setEndTime] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:8080/api/challenges", {
//             recipeVideoUrl,
//             startDate,
//             startTime,
//             endTime,
//             status: "Pending",
//             uploadedImages: []
//         }).then(() => window.location.reload());
//     };

//     return (
//         <div>
//             <h4 className="text-2xl font-bold mb-4 ">Contact Us</h4>
//         <form className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
//             <input type="text" placeholder="Recipe Video URL" onChange={(e) => setRecipeVideoUrl(e.target.value)} />
//             <input type="date" onChange={(e) => setStartDate(e.target.value)} />
//             <input type="time" onChange={(e) => setStartTime(e.target.value)} />
//             <input type="time" onChange={(e) => setEndTime(e.target.value)} />
//             <button type="submit">Create Challenge</button>
//         </form>
//         </div>
//     );
// };

// export default NewChallenge;


import React, { useState } from "react";
import axios from "axios";

const NewChallenge = () => {
    const [recipeVideoUrl, setRecipeVideoUrl] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/api/challenges", {
                recipeVideoUrl,
                startDate,
                startTime,
                endTime,
                status: "Pending",
                uploadedImages: [],
            })
            .then(() => window.location.reload());
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
                <h4 className="text-3xl font-bold text-center mb-6 text-blue-600">Create a New Challenge</h4>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="recipeVideoUrl">
                            Recipe Video URL
                        </label>
                        <input
                            id="recipeVideoUrl"
                            type="text"
                            placeholder="Enter Recipe Video URL"
                            value={recipeVideoUrl}
                            onChange={(e) => setRecipeVideoUrl(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="startDate">
                            Start Date
                        </label>
                        <input
                            id="startDate"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="startTime">
                            Start Time
                        </label>
                        <input
                            id="startTime"
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="endTime">
                            End Time
                        </label>
                        <input
                            id="endTime"
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Create Challenge
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewChallenge;