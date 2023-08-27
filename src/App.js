const msg = ["Learn React", "Get Job", "Invest your income"];
const step = 3;
export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
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
        <button style={sid}>Previous</button>
        <button style={sid}>Next</button>
      </div>
    </div>
  );
}
