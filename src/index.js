import { App } from "./app";

function init() {
  const app = App();
  app.init("main");

  const animate = () => {
    app.goLeft();
    app.render();

    setTimeout(() => requestAnimationFrame(animate), 0);
  };

  animate();
}

init();
