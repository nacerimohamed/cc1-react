function Header({ title, score }) {
  return (
    <header>
      <h1>{title}</h1>
      {score !== null && <p>Score : {score}</p>}
    </header>
  );
}

export default Header;
