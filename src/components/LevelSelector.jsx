export default function LevelSelector({ onSelect }) {
  const levels = [
    {
      id: "Beginner",
      number: "01",
      title: "Для начинающих",
      description: "Первые шаги, управление и основы",
    },
    {
      id: "Advanced",
      number: "02",
      title: "Для продвинутых",
      description: "Точность, скорость и стратегия",
    },
  ];

  return (
    <div className="level-selector">
      {levels.map((level) => (
        <button
          key={level.id}
          type="button"
          className="level-card"
          onClick={() => onSelect(level.id)}
        >
          <span className="level-number">{level.number}</span>

          <div className="level-content">
            <h3>{level.title}</h3>
            <p>{level.description}</p>
          </div>

          <span className="level-arrow">→</span>
        </button>
      ))}
    </div>
  );
}