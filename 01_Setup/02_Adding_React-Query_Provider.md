## Step 1: Install React Query
Next, install React Query using npm. In your terminal, navigate to the project directory and run the following command:

```js
npm install react-query
```

## Step 2: Adding Client Provider
```js
 import { QueryClient, QueryClientProvider} from 'react-query'
 
 // Create a client
 const queryClient = new QueryClient()
 
 function App() {
   return (
     // Provide the client to your App
     <QueryClientProvider client={queryClient}>
        // Your Content
     </QueryClientProvider>
   )
 }
 ```