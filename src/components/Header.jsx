import Logo from "../assets/Fill 213.png"

function Header() {
  return (
    <header className="header">
      <img src={Logo} className="site-logo" />
      <p className="site-title">my travel journal</p>
    </header>
  )
}

export default Header