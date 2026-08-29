import { useEffect } from "react";

export default function TutorialModal({ tutorial, onClose }) {
  useEffect(() => {
    if (!tutorial) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [tutorial, onClose]);

  if (!tutorial) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "900px",
          maxWidth: "100%",
          background: "#111",
          border: "1px solid #28f57a",
          boxShadow: "0 0 50px rgba(40, 245, 122, 0.15)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Закрыть урок"
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            zIndex: 10,
            width: "38px",
            height: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            background: "rgba(0, 0, 0, 0.85)",
            border: "1px solid #28f57a",
            color: "#28f57a",
            fontSize: "22px",
            fontWeight: 400,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {/* Video */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            background: "#000",
          }}
        >
          <video
            src={tutorial.video}
            controls
            playsInline
            preload="auto"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              background: "#000",
            }}
          />
        </div>

        {/* Tutorial information */}
        <div
          style={{
            padding: "24px",
            background: "#111",
            color: "#fff",
          }}
        >
          <div
            style={{
              color: "#28f57a",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            {tutorial.category} · {tutorial.level}
          </div>

          <h2
            style={{
              margin: 0,
              color: "#fff",
              fontSize: "24px",
              lineHeight: 1.2,
              fontWeight: 600,
              letterSpacing: "-0.5px",
            }}
          >
            {tutorial.title}
          </h2>

          <p
            style={{
              margin: "12px 0 0",
              color: "#8b938e",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            {tutorial.description}
          </p>
        </div>
      </div>
    </div>
  );
}