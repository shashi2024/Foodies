import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("/api/hello")
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Spring Boot & React App</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
