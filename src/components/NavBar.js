import { Logo } from "./Logo";
import { Search } from "./Search";
import { ResultStats } from "./ResultStats";

export function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
