import React, { useState, useEffect } from 'react'
import "./Ifoodcounter.css"

export default function Ifoodcounter() {

  //Sempre começar a função do useState com "set<name>"
  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");
  
  useEffect(() => {
    document.getElementById("price").innerHTML = 2.00 * value;
  }, [value]);
  useEffect(() => {
    console.log(`o estilo do botão é: ${buttonStyle}`)
  }, [buttonStyle])

  function down() {
    if (value <= 1) {
      setButtonStyle("counter-button-minus-desactive");
    }

    if (value > 0) {
      setValue(value - 1);
    }
  }

  function up() {
    setValue(value + 1);
    setButtonStyle("counter-button-minus-active");
  }

  return (
    <div className='context-wrapper'>
      <button className={buttonStyle} onClick={down}>-</button>
      <p>{value}</p>
      <button className='counter-button-plus-active' onClick={up}>+</button>
      <p id='price'>2</p>
    </div>
  )
}
