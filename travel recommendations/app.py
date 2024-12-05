# To run: python -m streamlit run app.py in terminal
import streamlit as st
import pickle

places = pickle.load(open("places.pkl", "rb"))
similarity = pickle.load(open("similarity.pkl", "rb"))
placesList = places['Destination'].values

st.header("Travel Recommender System")
pastDestination = st.selectbox("Select destination from dropdown", placesList)

def recommend(destination):
  index = places[places['Destination'] == destination].index[0]
  distance = sorted(list(enumerate(similarity[index])), reverse = True, key = lambda x: x[1])
  recommendedPlaces = []
  for i in distance[1:6]:
     place = places.iloc[i[0]]
     recommendedPlaces.append(place.Destination)
  return recommendedPlaces

if(st.button("Show Recommended")):
    newPlaces = recommend(pastDestination)
    col1, col2, col3, col4, col5 = st.columns(5)
    with col1:
       st.text(newPlaces[0])
    with col2:
       st.text(newPlaces[1])
    with col3:
       st.text(newPlaces[2])
    with col4:
       st.text(newPlaces[3])
    with col5:
       st.text(newPlaces[4])