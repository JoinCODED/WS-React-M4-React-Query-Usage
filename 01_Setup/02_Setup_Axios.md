## Setup Axios instance
Next, let's create a file called utils/api/api.js in the src folder. This file will contain our Axios API configuration:

If you havn't installed Axios yet, please do

```js
npm install axios
```

```js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

instance.interceptors.response.use((response) => {
  return response.data;
});

export default instance;
```

### Interceptors
we are setting up a response interceptor for Axios requests made with the given Axios instance. Axios interceptors allow you to intercept HTTP requests and responses to modify them before they are handled by your application.

In this case, the response interceptor is being set up to modify the response object returned by the server before it is passed on to the calling code. Specifically, the response.data property is being extracted from the response object and returned. This means that the calling code will receive only the response data, rather than the full response object.

For example, if the server returns a response like this:
```js
{
  "status": 200,
  "message": "Success",
  "data": {
    "id": 123,
    "name": "John Doe"
  }
}
```

The response interceptor will extract the data property and return it to the calling code as:
```js
{
  "id": 123,
  "name": "John Doe"
}
```
This can be useful for simplifying the response handling code, since the calling code only needs to work with the response data, rather than the full response object, specially when we are using **react-query** because it does handle the status for us

### Additional dummy API resources
Here is a list of dummy data api urls, use them for your development purposes:

- **JSONPlaceholder**: JSONPlaceholder is a free API that provides a variety of dummy JSON data for testing and prototyping. It includes endpoints for posts, comments, albums, photos, and more.

- **ReqRes**: ReqRes is a simple RESTful API that provides a set of dummy data for testing and development purposes. It includes endpoints for users, login, and registration.

- **Random Data API**: Random Data API is a free RESTful API that provides random data across a variety of categories, including names, addresses, phone numbers, and more.

- **Mockaroo**: Mockaroo is a popular data mocking tool that provides a web-based API for generating randomized data in various formats, including CSV, JSON, and SQL.