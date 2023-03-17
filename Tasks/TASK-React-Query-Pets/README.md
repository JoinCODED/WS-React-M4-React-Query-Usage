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

1. We will move our adopt function to the store so we can access it anywhere in our app. Move the function to the store.
2. In `PetItem.js` import our store and replace the function that's coming from props to our function that we did in the store.

### Not Observing the Change?

1. There's a component that needs to be marked as an observer, can you know which one it is and mark it as an observer?
2. Don't forget to `import { observer } from "mobx-react";`.
