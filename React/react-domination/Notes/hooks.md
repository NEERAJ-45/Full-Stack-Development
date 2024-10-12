### **What are Hooks?**
- **Hooks** are functions in React that let you use state and other React features in **functional components** (which used to be possible only in class components).
- They make it easier to manage component logic without needing to switch to class-based components.

---

### **`useState` Hook**
- **`useState`** is a React Hook that lets you add state to a functional component.
  
#### **How it works**:
- You pass an initial value to `useState`, and it returns an array with:
  1. **The current state value**.
  2. **A function to update the state**.
  
#### **Example**:
```javascript
import { useState } from 'react';

const Counter = () => {
  // Initializing state: 'count' starts at 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

- **`count`** is the state variable.
- **`setCount`** is the function used to update the `count` value.
- **On re-render**: React re-renders the component every time the state changes, displaying the updated value.

