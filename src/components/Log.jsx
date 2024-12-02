export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((item) => {
        const {
          player,
          square: { row, col },
        } = item;
        return (
          <li key={`${row}${col}`}>
            {player} played {row}, {col}
          </li>
        );
      })}
    </ol>
  );
}
