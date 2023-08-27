import { useState } from "react";

const msg = ["Learn React", "Get Job", "Invest your income"];
// const step = 1;
export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  const [step, setStep] = useState(1);
  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
  }
  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
    }
  }
  const sid = { backgroundColor: "purple", color: "white" };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step === 1 ? "active" : ""}>1</div>
        <div className={step === 2 ? "active" : ""}>2</div>
        <div className={step === 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step} :{msg[step - 1]}
      </p>
      <div className="buttons">
        <button style={sid} onClick={handlePrevious}>
          Previous
        </button>
        <button style={sid} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
