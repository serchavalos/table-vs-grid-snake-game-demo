import { App } from "./app";

function init() {
  const app = new App();
  app.init("main");
  app.setup();

  const animate = () => {
    app.update();
    app.render();

    setTimeout(() => requestAnimationFrame(animate), 0);
  };

  animate();
}

init();
