# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import numpy as np
import pickle

loaded_model = pickle.load(open('C:/Users/Rishabh/RmJ/teerthankar.ai/pickle/trained_model.sav', 'rb' ))

input = (4, 110, 92, 0, 0, 37.6, 0.191, 30)
input_array = np.asarray(input)
input_reshaped = input_array.reshape(1, -1)

prediction = loaded_model.predict(input_reshaped)
print(prediction)

if prediction[0] == 0:
  print("person is not diabetic")
else:
  print('person is diabetic')