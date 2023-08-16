import { Link } from "react-router-dom";
import { Icon } from "../icons/Icon";

export function Header() {
  return (
    <div className="header">
      <Icon className="headerIcon" />
      <Link to="/" className="headerLink headerLinkFirst">
        Currency Converter
      </Link>

      <Link to="/currencies" className="headerLink">
        Rates
      </Link>
    </div>
  );
}