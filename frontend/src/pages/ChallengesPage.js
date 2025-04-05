import React, { useEffect, useState } from "react";
import axios from "axios";
import ChallengeList from "../components/ChallengeList";
import NewChallenge from "../components/NewChallenge";
import ChallengeTimer from "../components/ChallengeTimer";
import ChallengeUpload from "../components/ChallengeUpload";

const ChallengesPage = () => {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/challenges")
            .then(res => setChallenges(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Challenges</h1>
            <NewChallenge />
            <ChallengeList challenges={challenges} />
            <ChallengeTimer />
            <ChallengeUpload /> 
        </div>
    );
};

export default ChallengesPage;
