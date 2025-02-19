import React, { useState } from 'react';
import '../styles/prediction.css'; // Import the CSS file

const Prediction = () => {
    const [formData, setFormData] = useState({
        N: '', P: '', K: '', temperature: '', humidity: '', ph: '', rainfall: ''
    });
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        setResult(data.crop);
    };

    return (
        <div className="prediction-container"> {/* Apply the container class */}
            <h2>Crop Prediction</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <label>{key}:</label>
                        <input
                            type="number"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            required
                        />
                    </div>
                ))}
                <button type="submit">Predict Crop</button>
            </form>
            {result && <h3>Recommended Crop: {result}</h3>}
        </div>
    );
};

export default Prediction;
// In the Prediction component, we define a form with input fields for the user to enter values for N, P, K, temperature, humidity, pH, and rainfall. When the form is submitted, the data is sent to the Flask API endpoint /predict using a POST request. The response from the API is then displayed as the recommended crop in the UI.