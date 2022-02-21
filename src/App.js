import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Quotes from "./Quotes";

const url = "https://api.adviceslip.com/advice";

export default function App() {
  const [loading, setloading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch(url);
    const quotes = await response.json();
    setloading(false);
    setQuotes(quotes.slip);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading === true) {
    return <Loading />;
  }
  return <Quotes fetchQuote={fetchQuote} quotes={quotes} />;
}
