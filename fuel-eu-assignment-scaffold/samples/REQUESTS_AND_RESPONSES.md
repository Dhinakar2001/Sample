# Sample requests & responses (templates)

GET /routes
Response: 200 OK
[
  {
    "id": 1,
    "routeId": "R001",
    "vesselType": "Container",
    "fuelType": "HFO",
    "year": 2024,
    "ghgIntensity": 91.0,
    "fuelConsumption": 5000,
    "distance": 12000,
    "totalEmissions": 4500,
    "isBaseline": false
  },
  ...
]

POST /routes/:id/baseline
Response: 200 OK
{ "message": "baseline set", "routeId": "R001" }
