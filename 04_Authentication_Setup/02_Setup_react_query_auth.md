### Using react-query makes the api calls much easier, but the only problem is that it doesn't help much with authentications, meaning that it doesn't really give us an easy way to login and register and so one.

There is an amazing library called react-query-auth that helps us utilize react-query to handle authentication. It's a very simple library that provides a useAuth hook that we can use to get the current user, login, logout, and register.

### Setup
1. Install the react-query-auth library
```js
npm i react-query-auth
```

2. Create a new file called `index.js` in `src/utils/auth` and paste the following code in it.

```js
// src/auth.js
import { configureAuth } from 'react-query-auth';
import api from '../api';

const { useUser, useLogin, useRegister, useLogout } = configureAuth({
  userFn: () => api.get('/me'),
  loginFn: (credentials) => api.post('/signin', credentials),
  registerFn: (credentials) => api.post('/signup', credentials),
  logoutFn: () => api.post('/signout'),
});

export { useUser, useLogin, useRegister, useLogout };
```

Here we are using the `configureAuth` function from `react-query-auth` to create our auth hooks. We are passing in the functions that will be used to login, logout, register, and get the current user.

For further reading on how to use the react-query-auth function, check out the https://www.npmjs.com/package/react-query-auth