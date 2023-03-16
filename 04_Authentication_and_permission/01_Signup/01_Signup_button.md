1. Let's start with creating a signup button. Create a component called SignupButton.js and set it up.

2. Create a CSS file for the button styles:

### signup-button.css
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

3. Import the CSS file in SignupButton and render the button with the corresponding class.

### SignupButton.js
```js
import React from "react";
import "./signup-button.css";

const SignupButton = () => {
  return <button className="auth-button">Sign up</button>;
};

export default SignupButton;
```

4. Add the button to your navbar
