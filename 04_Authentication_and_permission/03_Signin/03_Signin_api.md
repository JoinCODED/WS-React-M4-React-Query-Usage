### In this Step, you'll learn how to use React Query's useMutation hook to handle an API call for user signin.

1. We have to import the useLogin hook that we created earlier using react-query-auth

```js
import { useLogin } from "../utils/auth";
```

2. Now lets just use the useLogin hook that we created earlier using react-query-auth

```js
const login = useLogin();
```

3. We will Call the mutate method on the login variable returned by useLogin inside the submit function. Pass the form values and a configuration object with onError and onSuccess callback functions:

```js
login.mutate(values, {
  onError: () => console.log("invalid credentials"),
  onSuccess: () => console.log("you logged in"),
});
```

onError will be called if the mutation fails (e.g., due to invalid credentials), while onSuccess will be called if the mutation is successful

Here is the code.

```js
function Signin() {
  const login = useLogin();
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
        Signin
      </button>
    </Form>
  </Formik>;
}
```
