import React, { useState } from "react";
import axios from "axios";

const NewChallenge = () => {
    const [recipeVideoUrl, setRecipeVideoUrl] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/challenges", {
            recipeVideoUrl,
            startDate,
            startTime,
            endTime,
            status: "Pending",
            uploadedImages: []
        }).then(() => window.location.reload());
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Recipe Video URL" onChange={(e) => setRecipeVideoUrl(e.target.value)} />
            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
            <input type="time" onChange={(e) => setStartTime(e.target.value)} />
            <input type="time" onChange={(e) => setEndTime(e.target.value)} />
            <button type="submit">Create Challenge</button>
        </form>
    );
};

export default NewChallenge;
