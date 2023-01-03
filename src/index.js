import { setItem } from "./utils/storage";
import "./index.scss";

document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack");
  alert("v4");
  alert("v2");

  const arr = [123,213,-5,-1312,2,133];
  console.log(getArray(arr));

  setItem(
    "token",
    "klsdjfklsjkdfjksldsdkjfklsjdfklsjdlfkjslkdfjklsfklsjkldfjskljfklsjfl"
  );
});


const getArray =(arr)=>{
  return arr.filter(x=> x>10).reduce((t, x)=> x+t,0);
};

