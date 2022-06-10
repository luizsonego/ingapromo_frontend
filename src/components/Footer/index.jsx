import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 h-48">
      <hr />
      <div className="container mx-auto py-5">
        <Link to="#">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">Cuponzim</span> Todos direitos reservados.
        </Link>
      </div>
    </footer>
  );
}
