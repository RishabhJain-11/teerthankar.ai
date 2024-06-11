# -*- coding: utf-8 -*-
"""
Created on Tue Jun 11 18:29:23 2024

@author: Rishabh
"""

import numpy as np
import pickle 
import streamlit

loaded_model = pickle.load(open('C:/Users/Rishabh/RmJ/teerthankar.ai/pickle/trained_model.sav', 'rb' ))

def diabetes_prediction(input_data):
    input_array = np.asarray(input)
    input_reshaped = input_array.reshape(1, -1)

    prediction = loaded_model.predict(input_reshaped)
    print(prediction)

    if prediction[0] == 0:
      return "The person is NOT Diabetic"
    else:
      return 'The person is Diabetic'