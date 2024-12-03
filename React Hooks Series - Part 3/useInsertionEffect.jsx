import { useInsertionEffect } from "react";

function InsertionEffectExample() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = "body { background-color: lightblue; }";
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <div>Hello World</div>;
}
