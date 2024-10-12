
#  Basic Syntax of App.jsx
### 1. **Declaring a functional React component named Fun**
This declares the component `Fun`.

```javascript
const Fun = () => {
```

---

### 2. **Declaring the `user` variable**
The `user` variable is initially set to "Neeraj".

```javascript
var user = "Neeraj";
```

---

### 3. **Defining the `abc` function**
The `abc` function updates the `user` variable when the button is clicked.

```javascript
const abc = () => {
  user = "Ruchita";
};
```

---

### 4. **JSX Return Block**
This is where the component's UI is defined using JSX.

```javascript
return (
  <div>
    <h1>{user} will be GOAT🐐</h1>
    <button onClick={abc}>Change User</button>
    <h1>{user} will be Mine</h1>
  </div>
);
```

- **Heading 1**: Displays the current `user` variable value.
- **Button**: Triggers the `abc` function to change the user on click.
- **Heading 2**: Displays the updated user after the button click.

---

### 5. **Exporting the Fun component**
This exports the `Fun` component so it can be used in other files.

```javascript
export default Fun;
```

---

