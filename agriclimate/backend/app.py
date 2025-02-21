import joblib
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend requests

# Load the models
model_crop = joblib.load("crop_model.pkl")
model_flood = joblib.load("flood_model.pkl")

@app.route('/predict-crop', methods=['POST'])
def predict_crop():
    try:
        data = request.get_json()

        # Extract and convert to float for crop prediction
        features = [
            float(data['N']), float(data['P']), float(data['K']), 
            float(data['temperature']), float(data['humidity']), 
            float(data['ph']), float(data['rainfall'])
        ]

        # Make crop prediction
        prediction = model_crop.predict([features])[0]
        return jsonify({'crop': prediction})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/flood-predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        features = [
            float(data['march_may']),
            float(data['avg_june']),
            float(data['increase_may_june'])
        ]
        prediction = model_flood.predict([features])[0]
        result = "Severe flood possible" if prediction == 1 else "No severe flood risk"
        return jsonify({'flood_risk': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
