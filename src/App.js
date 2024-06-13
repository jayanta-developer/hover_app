import "./style.css";

import Card from "./Card";

export default function App() {
  const cards = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  return (
    <>
      <div className="mainContainer">
        {/* card */}
        {cards.map((el, i) => (
          <Card key={i} />
        ))}
      </div>
    </>
  );
}
