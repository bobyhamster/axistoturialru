export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Axis Tutorials home">
        <img
          className="brand-mark"
          src="/images/axislogo.svg"
          alt=""
        />

        <span className="brand-name">
          AXIS<br />
          TUTORIALS
        </span>
      </a>

      <nav className="main-nav" aria-label="Навигация">
  <a className="active" href="#tutorials">
    Туториалы
  </a>

  <a href="#authors">
    Авторы
  </a>

  <a
    className="language-switch"
    href="https://axistutorials.vercel.app/"
  >
    EN
  </a>
</nav>
    </header>
  );
}