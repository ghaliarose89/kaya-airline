import logo from "../../assets/Logo.svg";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" />
    </div>
  );
}
