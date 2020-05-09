import { renderTable } from "./canvas";
import { Snake, SnakeType } from "./snake";

export const App = () => {
  let snake: SnakeType;
  const NUM_ROWS = 50;
  const NUM_CELLS = 50;

  return {
    init: (elementId: string) => {
      renderTable(elementId, NUM_ROWS, NUM_CELLS);
      snake = Snake();
    },

    render: () => {
      Array.from(document.querySelectorAll("td")).map((td) =>
        td.classList.remove("selected")
      );

      const cssSelector = snake
        .getCoordinates()
        .map(([coordX, coordY]) => `.row-${coordY} .cell-${coordX}`)
        .join(",");

      Array.from(document.querySelectorAll(cssSelector)).map((td) =>
        td.classList.add("selected")
      );
    },

    goLeft: () => {
      let [posX, posY] = snake.getHeadCoordinates();
      posX = posX < NUM_CELLS - 1 ? posX + 1 : 0;
      snake.move([posX, posY]);
    },
  };
};
