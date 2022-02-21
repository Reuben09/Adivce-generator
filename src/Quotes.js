import React from "react";

export default function Quotes({ quotes, fetchQuote }) {
  const { id, advice } = quotes;

  console.log(quotes);
  return (
    <div className="quote-container" key={id}>
      <div className="quote-container-two">
        <h3>
          <span className="quote">"</span>
          {advice}
        </h3>

        <div className="button-container">
          <button onClick={() => fetchQuote()}>Generate quote</button>
        </div>
      </div>
    </div>
  );
}
