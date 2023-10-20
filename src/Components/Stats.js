export default function Stats({ items }) {
  if (!items.length)
    return (
      <div>
        <p className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
        <h2 className="stats">Built by Sufyan.</h2>
      </div>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything! Ready to go ✈️"
            : `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
      <h2 className="stats">Built by Sufyan.</h2>
    </div>
  );
}
