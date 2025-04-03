import React, { useState, useEffect } from "react";

const ChallengeTimer = ({ startTime, endTime, videoUrl, onComplete }) => {
    const calculateTimeLeft = () => {
        const end = new Date(`1970-01-01T${endTime}:00`).getTime();
        const now = new Date().getTime();
        return Math.max(0, end - now);
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        if (timeLeft <= 0) {
            clearInterval(timer);
            onComplete();
        }

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div>
            <h3>Time Left: {formatTime(timeLeft)}</h3>
            <video width="400" controls autoPlay>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default ChallengeTimer;
