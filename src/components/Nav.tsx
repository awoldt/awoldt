import Image from "next/image";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href={"/"} title="Return home">
          <Image
            src="favicon.svg"
            alt="Logo"
            width="35"
            height="35"
            className="d-inline-block align-text-top"
          />
          <span>Awoldt</span>
        </a>
      </div>
    </nav>
  );
}
