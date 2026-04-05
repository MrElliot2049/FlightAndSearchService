- src/
    - index.js (server)
    - models/
    - controllers/
    - middlewares/
    - services/
    - utils/
    - config/
    - repository/
- test/ 
- static/
- temp/


## DB Design
- Airplane Table (id, model_no, capacity, created_at, updated_at)
- Flights (id, src_city_id, dest_city_id, airplane_id, dept, arrival, flight_number, airport_id)
- Airport (id, city_id, name, address)
- City (id, name)

## Tables
### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> A city can have more than one airports but one airport will belong to a city only (1 to many relationship)
