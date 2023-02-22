## useQuery - The Listing Hook

In this section, we will make a post a new item to the api, using the POST method

```jsx
import React from "react";
import { useMutation, useQuery } from "react-query";
import api from "../../utils/api";

const CreateMonster = () => {
  const mutation = useMutation((newTodo) => {
    return api.post("/todos", newTodo);
  });


  function submit(e) {
    // Stop the form from refreshing the page
    e.preventDefault();
    // Get form reference
    const formData = new FormData(e.target);
    // Extract all field values from form
    // Ex: {title: 'Create new item'}
    const formProps = Object.fromEntries(formData);
    // use the useMutation function to submit the data
    mutation.mutate(formProps);
  }

  return (
    <div>
      // Handling the submit manually
      <form onSubmit={submit}>
        <input name="title" type="text" />
        <button type="submit">Create Todo</button>
      </form>
    </div>
  );
};

export default CreateMonster;
```
