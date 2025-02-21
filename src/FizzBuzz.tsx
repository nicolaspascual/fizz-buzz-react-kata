import { ChangeEvent, useState } from "react";
import { fizzBuzz } from "./services/FizzBuzzService";
import "./FizzBuzz.css";

export default function FizzBuzzComponent() {
  const [result, setResult] = useState<string>("");



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value);
    const inputValue = isNaN(parsedValue) ? undefined : parsedValue;
    const fizzBuzzResult = fizzBuzz(inputValue)
    setResult(fizzBuzzResult);
  };

  return (
    <div className="wrapper">
      <div className="container large">
        <h1 className="title large-text">FizzBuzz</h1>
        <form className="form">
          <input
            type="number"
            onChange={handleChange}
            className="input large-input"
            placeholder="Enter a number"
          />
        </form>
        {result && <p className="result large-text">Result: {result}</p>}
      </div>
    </div>
  );
}
