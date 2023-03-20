### Protecting your App with AuthLoader

1. The library also provides the AuthLoader component that can be used to handle loading states when fetching the authenticated user. You can use it like this:

```js
function MyApp() {
  return (
    <Routes>
      <AuthLoader
        renderLoading={() => <div>Loading ...</div>}
        renderUnauthenticated={() => <Signin />}
      >
        <Route path="/" element={<Home />} />
      </AuthLoader>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    
  );
}
```
