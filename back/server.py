from os import sendfile
from flask import Flask, request, jsonify
import json
import matplotlib.pyplot as plt
import pandas as pd
from flask_cors import CORS
from io import BytesIO
import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

install('pandas')

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) # Permet les requêtes cross-origin depuis le frontend

# Chargement des données initiales
df_response2 = pd.read_csv("https://raw.githubusercontent.com/audreybaudry/egalit/main/dataset/DEI%20Dataset.csv")
@app.route('/question/2', methods=['GET'])
def get_division_distribution():
    gender_column = 'Gender'
    division_column = 'Division'
    # Filter data to include only 'Female' and 'Male' genders
    filtered_data = df_response2[df_response2[gender_column].isin(['Female', 'Male'])]
    # Count occurrences of each gender in each division
    division_distribution = filtered_data.groupby([division_column, gender_column]).size().unstack(fill_value=0)
    # Normalize the counts to get proportions and convert to percentages 
    division_distribution_normalized = division_distribution.div(division_distribution.sum(axis=1), axis=0) * 100
    # Convert the summary to a dictionary
    division_distribution_dict = division_distribution_normalized.to_dict(orient='index')
    # Convert the dictionary to JSON
    division_distribution_json = json.dumps(division_distribution_dict)
    return division_distribution_json 
 
df_response = pd.read_csv("https://raw.githubusercontent.com/Shirley23H/egalit/main/data/df_response.csv")

@app.route('/question/1', methods=['GET'])
def get_gender_distribution():
    gender_column = 'What is your gender? - Selected Choice'
    filtered_gender_data = df_response[df_response[gender_column].isin(['Male', 'Female'])]
    gender_counts = filtered_gender_data[gender_column].value_counts(normalize = True)
    gender_counts_dict = gender_counts.to_dict()
    gender_counts_json = json.dumps(gender_counts_dict)
    return gender_counts_json

@app.route('/submit-response', methods=['POST'])
def submit_response():
    global df_response
    new_response = request.json
    df_response = df_response.append(new_response, ignore_index=True)
    return jsonify({"message": "Response added successfully!"}), 201

df_response3 = pd.read_csv("https://raw.githubusercontent.com/audreybaudry/egalit/main/dataset/DEI%20Dataset.csv")

@app.route('/question/3', methods=['GET'])
def get_manager_distribution():
    gender_column = 'Gender'
    manager_column = 'Manager'
    
    # Filter data to include only 'Female' and 'Male' genders
    filtered_data = df_response3[df_response3[gender_column].isin(['Female', 'Male'])]
    
    # Count occurrences of each gender in each manager status
    manager_distribution = filtered_data.groupby([manager_column, gender_column]).size().unstack(fill_value=0)
    
    # Convert the summary to a dictionary
    manager_distribution_dict = manager_distribution.to_dict(orient='index')
    
    # Convert the dictionary to JSON
    manager_distribution_json = json.dumps(manager_distribution_dict)
    
    return manager_distribution_json

df_response_4 = pd.read_csv("https://raw.githubusercontent.com/audreybaudry/egalit/main/dataset/df_response_2.csv")
@app.route('/question/4', methods=['GET'])
def get_education_level():
  gender_column = 'What is your gender? - Selected Choice'
  education_column = 'What is the highest level of formal education that you have attained or plan to attain within the next 2 years?'
  female_data = df_response_4[df_response_4[gender_column] == 'Female']
  education_counts = female_data[education_column].value_counts()
  education_counts_dict = education_counts.to_dict()
  education_counts_json = json.dumps(education_counts_dict)
  return education_counts_json

if __name__ == '__main__':
    app.run(debug=True)





