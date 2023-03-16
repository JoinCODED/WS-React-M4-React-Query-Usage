### In this step we will redirect the customer to the appropriate page, using React-Router

1. To add React Router redirection instead of the console.log statements, first, import useHistory from 'react-router-dom', then use the useHistory hook inside the Signup component to gain access to the history object. You can use the history.push() method to navigate to a new route on successful login.


```js
import { useMutation } from "react-query";
//Importing the useHistory hook
import { useHistory } from 'react-router-dom';
function Signup() {
  //initializing the useHistory hook
  const history = useHistory();
  const login = useMutation((credentials) => api.post("http://localhost:8000/login", credentials));
  function submit(values) {
    console.log(values);
    login.mutate(values, {
      onError: () => console.log("invalid credentials"),
      //Redirecting the customer to the /dashboard on Successful responses
      onSuccess: () => history.push('/dashboard'),
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
