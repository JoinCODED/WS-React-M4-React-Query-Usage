## Step 1: Install React Query
First, install React Query using npm. In your terminal, navigate to the project directory and run the following command:

```js
npm install @tanstack/react-query
```

## Step 2: Adding Client Provider
```js
 import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
 
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