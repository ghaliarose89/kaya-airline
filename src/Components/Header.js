import logo from "../Utils/Logo.svg";
import "../Utils/header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
    </div>
  );
}
