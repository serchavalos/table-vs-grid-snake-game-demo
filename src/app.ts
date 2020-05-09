import { renderTable } from "./canvas";
import { Snake } from "./snake";

export class App {
  snake: Snake;
  NUM_ROWS = 50;
  NUM_CELLS = 50;

  init = (elementId: string) => {
    renderTable(elementId, this.NUM_ROWS, this.NUM_CELLS);
    this.snake = new Snake();
  };

  render = () => {
    Array.from(document.querySelectorAll("td")).map((td) =>
      td.classList.remove("selected")
    );

    const cssSelector = this.snake
      .getCoordinates()
      .map(([coordX, coordY]) => `.row-${coordY} .cell-${coordX}`)
      .join(",");

    Array.from(document.querySelectorAll(cssSelector)).map((td) =>
      td.classList.add("selected")
    );
  };

  goLeft = () => {
    let [posX, posY] = this.snake.getHeadCoordinates();
    posX = posX < this.NUM_CELLS - 1 ? posX + 1 : 0;
    this.snake.move([posX, posY]);
  };
}
