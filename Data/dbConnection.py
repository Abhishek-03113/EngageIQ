from astrapy import DataAPIClient
import json


# Initialize the client
client = DataAPIClient("AstraCS:ebbTBKFxqHoYNtFNWKRpXzAg:1e672516d6afcb976ddaac95ec794709195bd6f6a8f514a801f3209e4aa22a06")
db = client.get_database_by_api_endpoint(
  "https://24a932ed-b478-466d-82cb-4cc13cfb9fc8-us-east-2.apps.astra.datastax.com"
)


"""Data Ingress"""

# create_collection = db.create_collection("ig_data") 
# collection = db.get_collection("ig_data") 

# data = 'Data.json' 

# with open(data) as f: 
#     data = json.load(f)
    
#     for i in data: 
#         collection.insert_one(i) 


"""Querying Data""" 

collection = db.get_collection("ig_data") 


# get data with post_type = image 

response = collection.find(
    {"post_type": "Image"}, limit=None
)

# print the data 

for i in response: 
    print(i) 