# 🐶 Pets Form 

In this task, you are going to crate a form to add a new pet to the pets website. You are going to use `@tanstack/react-query` and `react-bootstrap`.

## Instructions
- Fork and clone [this repository](https://github.com/JoinCODED/TASK-REACT-SP-Pets-Forms) to your `Development` folder.





### 1. Bootstrap Modal

1. `npm install react-bootstrap bootstrap@5.1.3`
2. Create a file called `PetCreateModal.js` in `Components`
3. Setup your component and import `Modal` from bootstrap. [Create the modal as the docs suggets](https://react-bootstrap.github.io/components/modal/)
4. Create a state for showing the modal with an intial value of `false`.
5. Create a `handleClose` and `handleShow` functions that changes our state to `false` or `true`.
6. Create a button that when pressed calls the `handleShow` function.


### 2. Bootstrap Form

1. In the Modal body create a form with the following fields: `name`,`type` and `image`. Docs are your friend! [click here for the docs](https://react-bootstrap.netlify.app/forms/overview/#Forms)
2. Create a state object to hold the form data.
3. For every field in the form, pass `onChange` attribute a method. Create that method and call it `handleChange`, that modifies our state object.
4. Add a `name` property to each field that matches the state object.
5. Create a `handleSubmit` method that - for now - console logs our state data and closes the modal. Also pass this method to your submit button.
6. Don't forget to [prevent the page from refreshing](https://www.robinwieruch.de/react-preventdefault/).
7. Import our modal in `PetsList` and render it at the top.

### 3. Creating in React Query

1. In our `pets` API let's create a method for adding a pet.
2. It takes an argument with our pet data .
3. In `PetCreateModal.js` `handleSubmit` call the method that adds a new pet from the `api`, and pass the method the new pet data that was taken from the form.

### 4. Updating a Pet Data

1. In our `pets` API let's create a method for updating a pet.
2. It takes an argument with our pet data .
3. pass the pet data to the model as props if it exists.
4. Create a hidden input in the form that holds the pet id.
5. In `PetCreateModal.js` `handleSubmit` check if the pet id is present, if it is, call the update method, if not, call the create method.
