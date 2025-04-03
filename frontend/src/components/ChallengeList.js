import React from "react";
import axios from "axios";

const ChallengeList = ({ challenges }) => {
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/challenges/${id}`)
            .then(() => window.location.reload())
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>My Challenges</h2>
            {challenges.length === 0 ? (
                <p>No challenges found.</p>
            ) : (
                <ul>
                    {challenges.map((challenge) => (
                        <li key={challenge.id}>
                            <p><strong>Recipe:</strong> {challenge.recipeVideoUrl}</p>
                            <p><strong>Date:</strong> {challenge.startDate}</p>
                            <p><strong>Time:</strong> {challenge.startTime} - {challenge.endTime}</p>
                            <p><strong>Status:</strong> {challenge.status}</p>
                            
                            {challenge.status === "Pending" && (
                                <button onClick={() => handleDelete(challenge.id)}>Delete</button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ChallengeList;
