import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Category";
import data from "./data";

const allCategories = [
  "all players",
  ...new Set(data.map((item) => item.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all players") {
      setMenuItems(data);
      return;
    }

    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Team list</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
