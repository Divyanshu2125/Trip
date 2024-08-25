import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  tripItems,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "description") {
    sortedItems = tripItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = tripItems.slice().sort((a, b) => a.packed - b.packed);
  } else sortedItems = tripItems;

  return (
    <div className="list">
      <ul>
        {sortedItems.length > 0 &&
          sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItem}>Clear</button>
      </div>
    </div>
  );
}
