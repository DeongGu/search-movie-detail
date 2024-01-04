import "./PageHeader.css";

export default function PageHeader() {
  return (
    <header className="header">
      <div>신성우</div>
      <nav>
        <ul>
          <li>
            <a href="nowPlaying">현재 상영 중</a>
          </li>
          <li>
            <a href="popularPlaying">인기 상영작</a>
          </li>
          <li>
            <a href="highPoint">높은 평점</a>
          </li>
        </ul>
      </nav>
      <input type="text" placeholder="Search..." />
    </header>
  );
}
