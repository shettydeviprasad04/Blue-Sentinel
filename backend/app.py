# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.model_training import load_model
from utils.data_processing import preprocess_data
import joblib
import numpy as np

app = Flask(__name__)
CORS(app, resources={r"/predict-pollution": {"origins": "http://localhost:5173"}})

# Load models
pollution_model = load_model('./models/pollution_model.pkl')
species_model = load_model('./models/species_model.pkl')
flood_model = load_model('./models/flood_model.pkl')
CORS(app, origins="http://localhost:5173", supports_credentials=True)


quality_model = joblib.load('./models/water_quality_model.pkl')
API_KEY = 'bdc48f3ae42d5891ad7a324b3742daf2'


@app.route('/environmental-data')
def get_environmental_data():
    response = request.get(f'http://api.openweathermap.org/data/2.5/weather?lat=22.3964&lon=114.1095&units=metric&appid={API_KEY}')
    data = response.json()
    return jsonify(data)

@app.route('/predict-water-quality', methods=['POST'])
def predict_water_quality():
    try:
        data = request.json
        features = np.array([[
            data['pH'],
            data['Hardness'],
            data['Solids'],
            data['Chloramines'],
            data['Sulfate'],
            data['Conductivity'],
            data['Organic_carbon'],
            data['Trihalomethanes'],
            data['Turbidity']
        ]])

        prediction = quality_model.predict(features)
        return jsonify({'Potability': int(prediction[0])})  
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/predict-pollution', methods=['POST'])
def predict_pollution():
    data = request.json
    processed_data = preprocess_data(data, model_type='pollution')
    prediction = pollution_model.predict(processed_data)
    return jsonify({'pollution_prediction': prediction.tolist()})

@app.route('/species-classification', methods=['POST'])
def classify_species():
    try:
        if 'image' not in request.files:
            return jsonify({"error": "No image file provided"}), 400
        
        data = request.files['image'] 
        if data:
            result = species_model.predict(data)  
            return jsonify({'species': result})
        else:
            return jsonify({"error": "Failed to load the image"}), 400
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500


@app.route('/predict-flood', methods=['POST'])
def predict_flood():
    data = request.json
    processed_data = preprocess_data(data, model_type='flood')
    prediction = flood_model.predict(processed_data)
    return jsonify({'flood_risk': prediction.tolist()})

if __name__ == '__main__':
     app.run(debug=True, host='0.0.0.0', port=5000)
