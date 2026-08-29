const AUTHORS = [
  {
    username: "Eph",
    avatar: "/authors/1.jpg",
    x: "https://x.com/laibatdauthoi",
  },
  {
    username: "axisrobotics",
    avatar: "/images/axis.jpg",
    x: "https://x.com/axisrobotics",
  },
  {
    username: "KosiOkorie",
    avatar: "/authors/2.jpg",
    x: "https://x.com/KosiOkorie",
  },
  {
    username: "Sunny",
    avatar: "/authors/3.jpg",
    x: "https://x.com/Rabiussunny11",
  },
{
    username: "lincos",
    avatar: "/authors/lincos.jpg",
    x: "https://x.com/AnDRIAn15192139",
  },
];

export default function Authors() {
  return (
    <section className="section authors-section" id="authors">
      <div className="authors-heading">
        <div>
          <p className="authors-kicker">02 / АВТОРЫ</p>

<h2>Люди, которые создают видео.</h2>
        </div>

        
      </div>

      <div className="authors-grid">
        {AUTHORS.map((author) => (
          <a
            key={author.username}
            href={author.x}
            target="_blank"
            rel="noreferrer"
            className="author-card"
          >
            <img
              src={author.avatar}
              alt={author.username}
              className="author-avatar"
            />

            <span className="author-username">
              {author.username}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}