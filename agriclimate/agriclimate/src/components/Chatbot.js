import React, { useState } from "react";
import "../chat.css";
import "../styles/chatbot.css";

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
        // Process the response to handle markdown-like bold text (**bold**)
        const processedResponse = data.response ? convertBoldText(data.response) : "No response received";
        setResponse(processedResponse);
      } else {
        setResponse(data.error || "Error processing request");
      }
    } catch (error) {
      setResponse("Error connecting to server");
    }
  };

  const convertBoldText = (text) => {
    // This regex looks for text wrapped with ** and converts it to <b> tags
    const boldText = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    return boldText;
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <h2>Kisan Mitra</h2>
      </div>
      
      <div className="chat-interface">
        <div className="chat-input-container">
          <textarea
            className="chat-input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your agriculture-related query here..."
          />
        </div>

        <button className="generate-button" onClick={handleGenerate}>
          Generate Response
        </button>

        {response && (
          <div className="response-container">
            <div className="response-title">Expert Response</div>
            {/* Render the response with HTML */}
            <div
              className="response-content"
              dangerouslySetInnerHTML={{ __html: response }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;