export default function TutorialCard({ tutorial, onOpen }) {
  return (
    <article className="tutorial-card">
      <button
        className="tutorial-preview"
        onClick={() => onOpen(tutorial)}
        aria-label={`Смотреть ${tutorial.title}`}
        type="button"
      >
        {tutorial.video ? (
          <video
  className="tutorial-thumbnail"
  src={tutorial.video}
  poster={tutorial.poster}
  preload="metadata"
  muted
  playsInline
/>
        ) : (
          <div className="preview-grid" aria-hidden="true" />
        )}

        <span className="preview-overlay" />

        <span className="play-button" aria-hidden="true">
          ▶
        </span>

        <span className="duration">
          {tutorial.duration}
        </span>
      </button>

      <div className="tutorial-meta">
  <span>{tutorial.category}</span>
</div>

      <button
        className="tutorial-title"
        onClick={() => onOpen(tutorial)}
        type="button"
      >
        {tutorial.title}
      </button>

      <p className="tutorial-description">
        {tutorial.description}
      </p>

      <div className="tutorial-footer">
        <span>{tutorial.author}</span>

        <button
          onClick={() => onOpen(tutorial)}
          type="button"
        >
          Смотреть видео ↗
        </button>
      </div>
    </article>
  );
}