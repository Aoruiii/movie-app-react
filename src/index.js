import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";
import StarRating from "./components/StarRating";

function Test() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <StarRating onRating={setRating} />
      <p>There are {rating} srtars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Test />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Not Bad", "Good", "Excellent"]}
    />
    <StarRating size={30} className="test" defaultRating={3} />
  </React.StrictMode>
);
