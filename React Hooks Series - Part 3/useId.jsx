import { useId } from "react";

function IdExample() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Name</label>
      <input id={id} type="text" />
    </div>
  );
}
