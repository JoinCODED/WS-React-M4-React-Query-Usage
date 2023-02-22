## useQuery - The Listing Hook

In this section, we will make a call to an API that returns a list of data. We will use React-Query and Axios to manage the data fetching and caching.

```jsx
import { useQuery } from "react-query";
import api from "./api";

export const List = () => {
  const { data, isFetching, isSuccess } = useQuery(
    ["listData"],
    () => api.get("/todos")
  );

  return { isLoading, error, data };
};
```
