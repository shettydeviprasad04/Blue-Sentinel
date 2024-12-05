import joblib
from sklearn.ensemble import RandomForestClassifier

def train_pollution_model(data):
    X, y = data.drop(columns='pollution_level'), data['pollution_level']
    model = RandomForestClassifier()
    model.fit(X, y)
    save_model(model, 'pollution_model.pkl')

def save_model(model, filename):
    joblib.dump(model, f'./models/{filename}')

def load_model(filepath):
    return joblib.load(filepath)
