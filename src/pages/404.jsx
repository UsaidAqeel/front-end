import * as React from "react";

const Man = () => {
  const [states, setState] = React.useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    { name: "", date: "" }
  );
  console.log(states);
  return (
    <>
    <div class='w-full h-screen flex justify-center items-center'>
      <h1>404</h1>
      </div>
    </>
  );
};

export default Man;
