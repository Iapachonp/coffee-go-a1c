import { Link } from "react-router-dom";

export default function NeoButton({ onClick, children, title, to }) {
  return (
    <Link
      onClick={onClick}
      title={title}
      to={to}
      style={{
        display: "inline-block",
        padding: "10px 18px",
        marginTop: "16px", //spacing from above component
        backgroundColor: "rgba(0, 255, 195, 0.2)", // more opaque
        color: "#ffffff",
        border: "1px solid rgba(0, 255, 195, 0.3)",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "14px",
        cursor: "pointer",
        textDecoration: "none",
        transition: "all 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "rgba(0, 255, 195, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "rgba(0, 255, 195, 0.2)";
      }}
    >
      {children}
    </Link>
  );
}

