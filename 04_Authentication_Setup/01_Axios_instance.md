### Creating an axios instance

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

4. export it so we can use it in other files
```js
export default api;
```

