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
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">Hello</p>
      <div className="buttons">
        <button style={sid}>Previous</button>
        <button style={sid}>Next</button>
      </div>
    </div>
  );
}
