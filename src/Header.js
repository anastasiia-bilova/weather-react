import Search from "./Search";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <Search />
      <div className="list-of-cities" id="list-of-cities"></div>
    </div>
  );
}
