import pandas as pd
from sklearn.preprocessing import StandardScaler

def preprocess_data(data, model_type):
    if isinstance(data, dict):
        data = {key: [value] for key, value in data.items()}
    df = pd.DataFrame(data)
    return df

