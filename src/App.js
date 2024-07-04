import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {step}
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="Number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="text">
        {count === 0 ? (
          "Today is "
        ) : count > 0 ? (
          <>
            <span style={{ color: "green" }}>{count}</span> days from today is{" "}
          </>
        ) : (
          <>
            <span style={{ color: "darkred" }}>{Math.abs(count)}</span> days ago
            was{" "}
          </>
        )}
        {date.toDateString()}
      </div>
      {count !== 0 || step !== 1 ? (
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      ) : null}
    </div>
  );

  // return (
  //   <div className="App">
  //     <div>
  //       <div>
  //         <button onClick={() => setStep((s) => (s > 1 ? s - 1 : (s = 1)))}>
  //           -
  //         </button>
  //         <span>Step: {step}</span>
  //         <button onClick={() => setStep((s) => s + 1)}>+</button>
  //       </div>
  //       <div>
  //         <button onClick={() => setCount((c) => c - step)}>-</button>
  //         <span>Count: {count}</span>
  //         <button onClick={() => setCount((c) => c + step)}>+</button>
  //       </div>
  //       <p className="text">
  //         {count === 0 ? (
  //           "Today is "
  //         ) : count > 0 ? (
  //           <>
  //             <span style={{ color: "blue" }}>{count}</span> days from today is{" "}
  //           </>
  //         ) : (
  //           <>
  //             <span style={{ color: "blue" }}>{Math.abs(count)}</span> days ago
  //             was
  //           </>
  //         )}
  //       </p>
  //       <p className="date"> {date.toDateString()}</p>
  //     </div>
  //   </div>
  // );
}
