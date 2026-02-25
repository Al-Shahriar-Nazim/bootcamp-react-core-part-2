import { Suspense } from "react";
import "./App.css";
import Counter from "./Counter";
import Players from "./Players";
import Users from "./Users";
import Plyers from "./Plyers";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);
const friendFetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};
function App() {
  const friendsPromised = friendFetch();
  function handleClick1() {
    alert("click one");
  }
  const handleClick3 = () => {
    alert("click3");
  };
  const handle5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>React core concept part - 2</h1>
      <Suspense fallback={<h3>Frineds........</h3>}>
        <Plyers friendsPromised={friendsPromised}></Plyers>
      </Suspense>

      <Suspense fallback={<h3>Loading users...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Players></Players>
      <Counter></Counter>
      <button onClick={handleClick1}>Click 1</button>
      <button
        onClick={function handle2() {
          alert("click2");
        }}
      >
        CLick 2
      </button>
      <button onClick={handleClick3}>Click 3</button>
      <button
        onClick={() => {
          alert("click 4");
        }}
      >
        Click 4{" "}
      </button>
      <button onClick={() => handle5(3)}>Click 5</button>
    </>
  );
}

export default App;
