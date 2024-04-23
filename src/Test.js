import { useState } from "react";

export default function Test() {
  const [numState, setNumState] = useState(0);
  const numConst = numState + 10;
  function handleClick() {
    setNumState(numState + 10);
  }
  function handleMinec() {
    setNumState(numState - 10);
  }
  return (
    <div>
      numConst: {numConst}
      <br />
      numState: {numState}
      <br />
      <button onClick={handleClick}>+</button>
      <button onClick={handleMinec}>-</button>
    </div>
  );
}
