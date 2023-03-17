## useQuery - The Listing Hook

In this section, we will make a post a new item to the api, using the POST method

```jsx
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import { Formik,Form,Field } from "formik";

const EditMonster = (props) => {
  const {id} = props;
  const mutation = useMutation((newValues) => {
    return api.put(`/todos/${id}`, newValues);
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
