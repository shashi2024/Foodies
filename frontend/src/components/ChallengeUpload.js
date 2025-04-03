import React, { useState } from "react";
import axios from "axios";

const ChallengeUpload = ({ challengeId, onUploadComplete }) => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        images.forEach((image) => {
            formData.append("images", image);
        });

        axios.post(`http://localhost:8080/api/challenges/${challengeId}/upload`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        }).then(() => {
            alert("Images uploaded successfully!");
            onUploadComplete();
        }).catch(err => console.error(err));
    };

    return (
        <div>
            <h3>Upload Your Dish Photos</h3>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ChallengeUpload;
