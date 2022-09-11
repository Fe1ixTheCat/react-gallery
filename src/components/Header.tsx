import avatar from '../assets/img/avatar.jpg';

export function Header() {
  return (
    <header>
      <div className="header-bg"></div>
      <div className="container">
        <div className="header-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <p className="header-name">Ricardo Cooper</p>
        <div className="header-links">
          <a className="header-links-email" href="mailto:test@mail.ru">Message</a>
          <a className="header-links-phone" href="tel:8888888888">Call</a>
        </div>
      </div>
    </header>
  )
}
