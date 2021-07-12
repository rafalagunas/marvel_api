import react, { useState } from "react";
import { Text } from "./text";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>
        Count:
        {count > 10 ? (
          <Text color="green" plaintext={count} />
        ) : (
          <Text color="red" plaintext={count} />
        )}
      </h2>
      <button onClick={increment}>Presióname</button>
    </div>
  );
};

export default Counter;
