from astrapy import DataAPIClient
import json
import os 

DB_TOKEN = os.environ.get("ASTRA_DB_TOKEN")
DB_ENDPOINT = os.environ.get("ASTRA_DB_ENDPOINT") 

# Initialize the client
client = DataAPIClient(DB_TOKEN)
db = client.get_database_by_api_endpoint(
  DB_ENDPOINT
)


"""Data Ingress"""

create_collection = db.create_collection("ig_data") 
collection = db.get_collection("ig_data") 

data = 'Data.json' 

with open(data) as f: 
    data = json.load(f)
    
    for i in data: 
        collection.insert_one(i) 


"""Querying Data""" 

collection = db.get_collection("ig_data") 


# get data with post_type = image 

response = collection.find(
    {"post_type": "Image"}, limit=None
)

# print the data 

for i in response: 
    print(i) 