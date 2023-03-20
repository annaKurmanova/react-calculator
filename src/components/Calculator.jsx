import React, { useState } from "react";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "-", "+", "."];

  const updateCalc = (val) => {
    if (
      (operators.includes(val) && calc == "") ||
      (operators.includes(val) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + val);

    if (!operators.includes(val)) {
      setResult(eval(calc + val).toString());
    }
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const val = calc.slice(0, -1);

    setCalc(val);
  };
  return (
    <>
      <div className="calculator">
        <div className="screen flex">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>
        <div className="buttons">
          <div onClick={deleteLast} className="button flex span-two">
            DEL
          </div>
          <div onClick={() => updateCalc("/")} className="button flex">
            /
          </div>
          <div onClick={() => updateCalc("*")} className="button flex">
            *
          </div>
          <div onClick={() => updateCalc("-")} className="button flex">
            -
          </div>
          <div onClick={() => updateCalc("+")} className="button flex">
            +
          </div>
          <div onClick={() => updateCalc("1")} className="button flex">
            1
          </div>
          <div onClick={() => updateCalc("2")} className="button flex">
            2
          </div>
          <div onClick={() => updateCalc("3")} className="button flex">
            3
          </div>
          <div onClick={() => updateCalc("4")} className="button flex">
            4
          </div>
          <div onClick={() => updateCalc("5")} className="button flex">
            5
          </div>
          <div onClick={() => updateCalc("6")} className="button flex">
            6
          </div>
          <div onClick={() => updateCalc("7")} className="button flex">
            7
          </div>
          <div onClick={() => updateCalc("8")} className="button flex">
            8
          </div>
          <div onClick={() => updateCalc("9")} className="button flex">
            9
          </div>
          <div onClick={() => updateCalc("0")} className="button flex">
            0
          </div>
          <div onClick={() => updateCalc(".")} className="button flex">
            .
          </div>
          <div onClick={calculate} className="button flex span-all">
            =
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
