import { useDeferredValue, useState } from "react";

function DeferredExample() {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Deferred Value: {deferredInput}</p>
    </>
  );
}
