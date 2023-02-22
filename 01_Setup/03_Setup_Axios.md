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

export default instance;

```

Here is a list of dummy data api urls, use them for your development purposes:

- **JSONPlaceholder**: JSONPlaceholder is a free API that provides a variety of dummy JSON data for testing and prototyping. It includes endpoints for posts, comments, albums, photos, and more.

- **ReqRes**: ReqRes is a simple RESTful API that provides a set of dummy data for testing and development purposes. It includes endpoints for users, login, and registration.

- **Random Data API**: Random Data API is a free RESTful API that provides random data across a variety of categories, including names, addresses, phone numbers, and more.

- **Mockaroo**: Mockaroo is a popular data mocking tool that provides a web-based API for generating randomized data in various formats, including CSV, JSON, and SQL.