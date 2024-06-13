import React, { useEffect, useState } from 'react'

export default function Card() {
  const [curentBorderColor, setCurentBorderColor] = useState();



  const rgbColors = [
    "#f54242",
    "#8E44AD",
    "#3498DB",
    "#1ABC9C",
    "#2ECC71",
    "#F1C40F",
    "#E67E22",
    "#ECF0F1",
    "#95A5A6",
    "#34495E",
    "#000000",
  ];

  useEffect(() => {
    setInterval(() => {
      setCurentBorderColor(Math.floor(Math.random() * rgbColors.length));
    }, 1000);
  }, []);



  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ background: rgbColors[curentBorderColor] }}></div>
        <div className="flip-card-back" style={{ background: rgbColors[curentBorderColor] }}></div>
      </div>
    </div>
  )
}
