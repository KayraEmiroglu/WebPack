import { setItem } from "./utils/storage";
import "./index.scss";

document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack");
  alert("v4");
  alert("v2");
  setItem(
    "token",
    "klsdjfklsjkdfjksldsdkjfklsjdfklsjdlfkjslkdfjklsfklsjkldfjskljfklsjfl"
  );
});
