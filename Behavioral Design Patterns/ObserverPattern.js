import { useEffect, useState } from "react";

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // Observer: Executes when the component renders
  useEffect(() => {
    console.log("Component has rendered");
  }, []);

  // Observer: Executes only when 'count' changes
  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}> Increment </button>;
};
