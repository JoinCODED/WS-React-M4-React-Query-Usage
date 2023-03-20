### In this Step, you'll learn how to use React Query's useMutation hook to handle an API call for user signup.

1. We have to import the useRegister hook that we created earlier using react-query-auth

```js
import { useRegister } from "../utils/auth";
```

2. Now lets just use the useRegister hook that we created earlier using react-query-auth

```js
const register = useRegister();
```

3. We will Call the mutate method on the register variable returned by useRegister inside the submit function. Pass the form values and a configuration object with onError and onSuccess callback functions:

```js
register.mutate(values, {
  onError: () => console.log("invalid credentials"),
  onSuccess: () => console.log("you logged in"),
});
```

onError will be called if the mutation fails (e.g., due to invalid credentials), while onSuccess will be called if the mutation is successful

Here is the code.

```js
function Signup() {
  const register = useRegister();
  function submit(values) {
    console.log(values);
    register.mutate(values, {
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
