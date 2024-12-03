import { useTransition, useState } from "react";

function TransitionExample() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    startTransition(() => {
      setCount((prev) => prev + 1);
    });
  };

  return (
    <>
      <button onClick={handleClick}>Increment</button>
      {isPending ? <p>Loading...</p> : <p>Count: {count}</p>}
    </>
  );
}
