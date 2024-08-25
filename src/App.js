import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [tripItems, setTripItem] = useState([]);

  function handleAddItem(item) {
    setTripItem((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setTripItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setTripItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    if (!tripItems.length) return;
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items?"
    );
    if (confirmed) setTripItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        tripItems={tripItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItems}
      />
      <Stats tripItems={tripItems} />
    </div>
  );
}
