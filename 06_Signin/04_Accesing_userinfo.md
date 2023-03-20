### Accessing user info

After the user has logged in, we can access the user info using the useUser hook provided by react-query-auth.

1. To access the userinfo anywhere in your application all you have to do is

   ```js
   import { useUser } from "../utils/auth";

   function Example() {
     const user = useUser();
     return <div>{user.email}</div>;
   }
   ```
And you dont have to worry about the user not being there because the AuthLoader component will take care of that if you cover your Example component with it.
