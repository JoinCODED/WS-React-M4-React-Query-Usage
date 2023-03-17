### Steps

Fork and clone [this repo](https://github.com/JoinCODED/REACT-SP-Pets-Zustand) into your `Development` folder

### Zustand

1. Install React-Query and Axios `npm install react-query axios`.
2. Create a file called `api` in `src/utils`.
3. Create a file called index.js inside `src/utils/api/pets` thats exports 2  function `list,adopt` whenever we say `pets APIs`

### Using the pets APIs
Instead of getting our pets list from our `petsData` file, we will now get it from useQuery hook.

1. In `PetsList.js` import your `pets APIs` and use react-query to get the data.

### Adopting a Pet

1. We will update the adopt function to use the `adopt` function from our `pets APIs`.
2. In `PetItem.js` import our `pets APIs` and replace the function that's coming from props to a new `useMutation` function that update the pet, its a "put" type of call.

### Not Observing the Change?

1. If you are not observing the change, you can invalidate the list query `key` to get the new data.
