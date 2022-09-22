import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data/data";

export default function App() {
  const cards = data.map(item => {
console.log(item);
    return (
      <Card 
        title={item.title}
        location={item.location}
        googleMaps={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })
  return (
    <div>
      <Header />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
