import inputStyle from "./style.css";

export default function Input () {
  return (
  <div style={inputStyle.div}>
    <input style={inputStyle.input} type="text"></input>
  </div>
  );
}