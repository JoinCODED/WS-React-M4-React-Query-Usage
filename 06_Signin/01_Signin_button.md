1. Let's start with creating a signin button. Create a component called SigninButton.js and set it up.

2. Create a CSS file for the button styles:

### signin-button.css
```css
.auth-button {
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: pink;
  color: white;
}
```

3. Import the CSS file in SigninButton and render the button with the corresponding class.

### SigninButton.js
```js
import React from "react";
import "./signin-button.css";

const SigninButton = () => {
  return <button className="auth-button">Sign In</button>;
};

export default SigninButton;
```

4. Add the button to your navbar
