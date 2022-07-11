import "./style.css";

const Loading = () => {
  return (
    <div
      className="position-fixed w-100 h-100 text-center loading"
      style={{
        background: "#0007",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 99,
      }}
    >
      <svg width="200" height="250" viewBox="0 0 50 50">
        <polygon
          strokeWidth="1"
          stroke="#fff"
          fill="none"
          points="20,1 40,40 1,40"
        ></polygon>
        <text fill="#fff" x="10" y="52">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
