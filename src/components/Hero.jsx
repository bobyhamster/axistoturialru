export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">

        {/* LEFT */}
        <div className="hero-left">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            ГАЙД ДЛЯ КОМЬЮНИТИ
          </p>

          <h1 id="hero-title">
            Научись тренировать
            <br />
            роботов <span>правильно.</span>
          </h1>

          <p className="hero-copy">
            Понятные видеоуроки для каждого этапа работы с Axis Robotics от первой траектории до уверенной работы со сложными задачами.
          </p>

          <div className="hero-bottom">
            <a className="hero-button" href="#tutorials">
              <span>Выбрать уровень</span>
              <strong>↓</strong>
            </a>

            <p className="hero-credit">
              Создано участниками сообщества Axis:
              <br />
              <a
                href="https://x.com/samurai_itan"
                target="_blank"
                rel="noopener noreferrer"
              >
                samurai_itan
              </a>{" "}
              и{" "}
              <a
                href="https://x.com/bobyhamster"
                target="_blank"
                rel="noopener noreferrer"
              >
                bobyhamster
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img
            src="/images/robot.png"
            alt="Axis Robotics"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}