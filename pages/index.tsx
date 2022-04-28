import { styled } from "../stitches.config";
const PlayerWrapper = styled("section", {
  backgroundColor: "#69666F",
  maxWidth: "768px",
});
const PlayerProgress = styled("div", {
  position: "relative",
  display: "block",
  overflow: "hidden",
  backgroundColor: "#444248",
  width: "100%",
  minHeight: "16px",
});
const ProgressTime = styled("div", {
  background: "linear-gradient(30deg,#639968 0%,#a8db58 100%)",
  position: "absolute",
  display: "block",
  minWidth: "20px",
  height: "100%",
  width: "0.289007%",
  left: "0",
});
const PlayerSection = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const PlayButton = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "30px",
  borderRight: "1px solid #444248",
  p: {
    position: "absolute",
    fontSize: "12px",
    color: "white",
    fontFamily: "monospace",
    margin: "0",
    bottom: "12px",
    letterSpacing: "-1px",
  },
});

const PlayerTitle = styled("div", {
  "p,h3": { margin: "0", color: "white", fontFamily: "sans-serif" },
  p: {
    letterSpacing: "1px",
    opacity: ".5",
    fontSize: "14px",
    fontWeight: "200",
    marginBottom: "2px",
  },
  h3: {
    fontSize: "20px",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginRight: "auto",
  paddingLeft: "30px",
});

const PlayerControls = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});
function HomePage() {
  return <PlayerLayout />;
}

export default HomePage;

function PlayerLayout() {
  return (
    <PlayerWrapper>
      <PlayerSection>
        <PlayButton>
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.25 10.5V31.5L29.75 21L12.25 10.5Z" fill="#FAF7F0" />
          </svg>
          <p>0:00 / 21:07</p>
        </PlayButton>
        <PlayerTitle>
          <p>Playing</p>
          <h3>Mongolia is so cool.</h3>
        </PlayerTitle>
        <PlayerControls>
          <div>speed</div>
          <div>Volume</div>
        </PlayerControls>
      </PlayerSection>
      <PlayerProgress>
        <ProgressTime />
      </PlayerProgress>
    </PlayerWrapper>
  );
}
