## useMutation - The Delete Request

In this section, we will make a post a new item to the api, using the POST method

```jsx
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { Formik,Form,Field } from "formik";

const EditMonster = (props) => {
  const {id} = props;
  const mutation = useMutation(id => api.destroy(id),{
    onSuccess: () => {
      queryClient.invalidateQueries(["pets"]);
    }
  });

  function submit(values) {
    mutation.mutate(values);
  }

  return (
    <Formik>
      // Handling the submit manually
      <Form onSubmit={submit}>
        <Field as="input" name="title" type="text" />
        <button type="submit">Create Todo</button>
      </Form>
    </Formik>
  );
};

export default EditMonster;
```
The component takes a props object as input, which includes an id property indicating the ID of the todo item to be edited.

The submit function is defined inside the EditMonster component, which takes the values parameter from Formik when the form is submitted. The submit function then calls the mutation.mutate() function to update the todo item with the new values


Note that the Form element does not include an onSubmit handler, since the submission is being handled manually by the submit function. This is a common pattern when using react-query to manage mutations in Formik.



