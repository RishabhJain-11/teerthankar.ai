# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import numpy as np
import pickle
import streamlit as st

loaded_model = pickle.load(open('C:/Users/Rishabh/RmJ/teerthankar.ai/pickle/trained_model.sav', 'rb' ))

def diabetes_prediction(input_data):
    input_array = np.asarray(input)
    input_reshaped = input_array.reshape(1, -1)

    prediction = loaded_model.predict(input_reshaped)
    print(prediction)

    if (prediction[0] == 0):
      return 'The person is not diabetic'
    else:
      return 'The person is diabetic'

def main():
    st.title('Diabetes Prediction Web App')
    Pregnancies = st.text_input('Number of Pregnancies')
    Glucose = st.text_input('Glucose Level')
    BloodPressure = st.text_input('Blood Pressure value')
    SkinThickness = st.text_input('Skin Thickness value')
    Insulin = st.text_input('Insulin Level')
    BMI = st.text_input('BMI value')
    DiabetesPedigreeFunction = st.text_input('Diabetes Pedigree Function value')
    Age = st.text_input('Age of the Person')
    
    # code for Prediction
    diagnosis = ''
    
    # creating a button for Prediction
    
    if st.button('Diabetes Test Result'):
        diagnosis = diabetes_prediction([Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age])                
    st.success(diagnosis)
    
    
if __name__ == '__main__':
    main()
    
    
