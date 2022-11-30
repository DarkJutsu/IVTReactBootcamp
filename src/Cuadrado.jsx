import { useEffect, useState } from "react";

export const Cuadrado = () => {

  let myInter;
  let r = 10;
  let g = 20;
  let b = 30;
  let nClick = 0;
  document.getElementById("div").style.background=`rgb(${r}, ${g}, ${b})`
  const myInterval = () => {
    myInter = setInterval(() => {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);

      document.getElementById("div").style.background=`rgb(${r}, ${g}, ${b})`
      document.getElementById("div").style.transition="all 0.8s"

    }, 1000);
  };

  const stopInter = () => {
    clearInterval(myInter);
    myInter = null;
    nClick=0
  };

  const clickInter = () => {
    nClick++
    if(nClick==2){
      clearInterval(myInter);
      myInter = null;
    }
  };

  return (
    <div>
      <div
        id="div"
        onMouseOver={myInterval}
        onMouseOut={stopInter}
        onClick={clickInter}
        className="cuadrado"
      ></div>
    </div>
  );
};
