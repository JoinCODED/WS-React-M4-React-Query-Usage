Let's create a bakery list component. Create a BakeryList.js for your file. We'll give it basic styling, a container class name and a title that already exist in our styles file.

```js
import { Title } from "../Title";

const BakeryList = () => {
  return (
    <div className="container">
      <Title>Bakeries</Title>
    </div>
  );
};

export default BakeryList;
```

Then, let's create a route for our bakeries in App.js. Don't forget to import BakeryList.

```js
<Route path="/bakeries">
  <BakeryList />
</Route>
```

Add a NavItem in our NavBar.js that takes us to /bakeries and place it above the /cookies NavItem.

```js
<NavItem className="nav-item" to="/bakeries">
  Bakeries
</NavItem>
<NavItem className="nav-item" to="/cookies">
  Cookies
</NavItem>
```

Create a BakeryItem that takes bakery as a prop, and render the image of the bakery and the name as the alt.

```js
import React from "react";

const BakeryItem = ({ bakery }) => {
  return <img src={bakery.image} alt={bakery.name} />;
};

export default BakeryItem;
```

In BakeryList, map over your bakeries from useQuery data and pass bakery as a prop. Don't forget to pass a key!

```js
const { data, isFetching, isSuccess } = useQuery(["listBakeries"], () =>
  api.get("/bakeries")
);
const bakeryList = data.map((bakery) => (
  <BakeryItem bakery={bakery} key={bakery.id} />
));
```

Let's take a look at our bakeries.
Great, the images are appearing. Let's give it some styling touches. add some styling with css file in your BakeryList folder and style your bakery items.

Let's also add a searching bar to our BakeryList component! Render SearchBar, set your query state and filter your bakeries.
const [query, setQuery] = useState("");

```js
const bakeryList = data.filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
.map((bakery) => <BakeryItem bakery={bakery} key={bakery.id} />);
```
