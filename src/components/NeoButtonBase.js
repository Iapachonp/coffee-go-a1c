
export default function NeoButtonBase({ onClick, children, title, type = "button", width = "auto" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      title={title}
      style={{
        display: "inline-block",
        padding: "10px 18px",
        marginTop: "16px",
        backgroundColor: "rgba(0, 255, 195, 0.2)",
        color: "#ffffff",
        border: "1px solid rgba(0, 255, 195, 0.3)",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "14px",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        width: width 
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "rgba(0, 255, 195, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "rgba(0, 255, 195, 0.2)";
      }}
    >
      {children}
    </button>
  );
}

