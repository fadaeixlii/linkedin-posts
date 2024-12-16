import { fromEvent } from "rxjs";

const button = document.getElementById("button");
const clicks = fromEvent(button, "click");

clicks.subscribe(() => console.log("Button clicked"));
