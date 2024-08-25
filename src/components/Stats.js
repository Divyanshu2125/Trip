export default function Stats({ tripItems }) {
  if (!tripItems.length)
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );

  const totalItems = tripItems.length;

  // By Reduce
  // const packedItems = tripItems.reduce((acc, curr) => acc + curr.packed, 0);

  // By Filter
  const packedItems = tripItems.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${totalItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
