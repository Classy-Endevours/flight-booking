## How to get started?
To run the app you need to setup few files which are environment and needs to be unique per app

### Steps
***Steps I***
1. open the repository in terminal
2. cd `booking-microservice`
3. create a `.env` file
4. Set the values
```
PORT=9100
ATLAS_URI=<your-database-url>
SECRET=any-secret
PUBLIC_URL=http://localhost:3000/
JWT_KEY=any-key
```

***Steps II***
1. open the repository in terminal
2. cd `user-microservice`
3. create a `.env` file
4. Set the values
```
PORT=9300
ATLAS_URI=<your-database-url>
SECRET=any-secret
PUBLIC_URL=http://localhost:3000/
JWT_KEY=any-key
ATLAS_URI_TEST=<your-database-url>
```

***Steps III***
1. open the repository in terminal
2. cd `flight-microservice`
3. create a `.env` file
4. Set the values
```
PORT=9000
ATLAS_URI=<your-database-url>
SECRET=any-secret
PUBLIC_URL=http://localhost:3000/
JWT_KEY=any-key
```

***Steps IV***
1. open the repository in terminal
2. cd `user-details-microservice`
3. create a `.env` file
4. Set the values
```
PORT=9200
ATLAS_URI=<your-database-url>
SECRET=any-secret
PUBLIC_URL=http://localhost:3000/
JWT_KEY=any-key
```
