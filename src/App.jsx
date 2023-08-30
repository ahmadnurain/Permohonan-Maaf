import Content from "./assets/component/Content";
import Header from "./assets/component/Header";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function App() {
  const init = async (engine) => {
    await loadFull(engine);
  };
  return (
    <div className="main">
      <Header />
      <Content />
      <Particles
        options={{
          particles: {
            color: {
              value: "#fff",
            },
            number: {
              value: 100,
            },
            opacity: {
              value: { min: 0.3, max: 1 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
            move: {
              direction: "bottom-right",
              enable: true,
              speed: { min: 3, max: 5 },
              straight: true,
            },
          },
        }}
        init={init}
      />
    </div>
  );
}

export default App;
