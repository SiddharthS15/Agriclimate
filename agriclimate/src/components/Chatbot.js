import React, { useState } from "react";
import "../chat.css";

const Chatbot = ({ onBack }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/generate", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.response || "No response received");
      } else {
        setResponse(data.error || "Error processing request");
      }
    } catch (error) {
      setResponse("Error connecting to server");
    }
  };

  return (
    <div className="prediction-form-container">
      <h2>Kissan Mitra</h2>
      <div className="placeholder-content">
        <textarea
          className="chat-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here..."
        />
        <button className="chat-button" onClick={handleGenerate}>
          Generate
        </button>
        <div className="response-container">
          <h2 className="text-lg font-semibold">Response:</h2>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
