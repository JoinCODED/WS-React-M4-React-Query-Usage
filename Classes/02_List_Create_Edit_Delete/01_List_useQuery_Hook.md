## useQuery - The Listing Hook

In this section, we will make a call to an API that returns a list of data. We will use React-Query and Axios to manage the data fetching and caching.

```jsx
import { useQuery } from "react-query";
import api from "./api";

export const List = () => {
  const { data, isFetching, isSuccess } = useQuery(
    ["listTodo"],
    () => api.get("/todos")
  );

  return (
  <div>
    <ul>
      {data?.map(todo => <li>{todo.title}</li>)}
    </ul>
  </div>
  );
};
```

Even though we are only using data, isFetching, isSuccess but the response object contains a few very important states you'll need to be aware of to be productive. A query can only be in one of the following states at any given moment:

- **isLoading** or status === 'loading' - The query has no data and is currently fetching
- **isError** or status === 'error' - The query encountered an error
- **isSuccess** or status === 'success' - The query was successful and data is available
- **isIdle** or status === 'idle' - The query is currently disabled (you'll learn more about this in a bit)
Beyond those primary states, more information is available depending on the state of the query:

- **error** - If the query is in an isError state, the error is available via the error property.
- **data** - If the query is in a success state, the data is available via the data property.
- **isFetching** - In any state, if the query is fetching at any time (including background refetching) isFetching will be true.
