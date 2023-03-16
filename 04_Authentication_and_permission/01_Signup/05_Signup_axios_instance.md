### Creating an axios instance

Lets cleanup our code a bit ,As you can see all axios requests have the same URL beginning. What's cool about axios is that it has a method called create which you can give your base URL.

1. In your src/utils folder "Create one if you dont have one", create a folder called
'api' and a file inside it called index.js

2. import axios

3. create the instance using 'axios.create'
```js
const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});
```

4. export it so we can use it in other files, and replace all your axios calls with this new instance
Ex:
```js
axios.post("http://localhost:8000/login");
```
becomes
```js
api.post("/login");
```

