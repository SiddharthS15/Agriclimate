import React, { useState } from "react";
import '../index.css';

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/generate", {  // Flask API endpoint
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Gemini AI Chatbot</h1>
      <textarea
        className="border p-2 w-96 h-32 mb-4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleGenerate}
      >
        Generate
      </button>
      <div className="mt-4 p-4 bg-white shadow-md w-96">
        <h2 className="text-lg font-semibold">Response:</h2>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chatbot;
