### In this Step, you'll learn how to use React Query's useMutation hook to handle an API call for user login.

1. We have to import the useMutation hook from react-query which helps us on sending api requests
```js
import { useMutation } from 'react-query';
```
We will be using axios library so install and import that too
```js
npm i axios
```
```js
import axios from 'axios';
```

2. Assuming that we have an API on /login,we will create a function that sends a POST request to the /login endpoint with the provided credentials:

```js
const login = useMutation((credentials) => axios.post('http://localhost:8000/login', credentials));
```

3. We will Call the mutate method on the login mutation object returned by useMutation inside the submit function. Pass the form values and a configuration object with onError and onSuccess callback functions:

```js
login.mutate(values, {
  onError: () => console.log('invalid credentials'),
  onSuccess: () => console.log('you logged in'),
});
```
onError will be called if the mutation fails (e.g., due to invalid credentials), while onSuccess will be called if the mutation is successful.


Here is the code.
```js
import { useMutation } from "react-query";
function Signup() {
  const login = useMutation((credentials) => axios.post("http://localhost:8000/login", credentials));
  function submit(values) {
    console.log(values);
    login.mutate(values, {
      onError: () => console.log("invalid credentials"),
      onSuccess: () => console.log("you logged in"),
    });
  }
  return;
  <Formik onSubmit={submit} initialValues={{ email: "", password: "" }}>
    <Form>
      <label htmlFor="email">Email:</label>
      <Field type="email" name="email" />
      <br />
      <label htmlFor="password">Password:</label>
      <Field type="password" name="password" />
      <br />
      <button type="submit" disabled={isSubmitting}>
        Signup
      </button>
    </Form>
  </Formik>;
}
```
