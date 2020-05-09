import { renderTable } from "./canvas";
import { Snake } from "./snake";

type Direction = "up" | "down" | "left" | "right";

export class App {
  snake: Snake;
  direction: Direction;
  NUM_ROWS = 50;
  NUM_CELLS = 50;
  allCells: HTMLTableCellElement[];
  mapKeys: { [k: string]: Direction } = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
  };

  init = (elementId: string) => {
    renderTable(elementId, this.NUM_ROWS, this.NUM_CELLS);
    this.allCells = Array.from(document.querySelectorAll("td"));
    this.snake = new Snake();
    this.direction = "right";
  };

  setup = () => {
    window.addEventListener("keyup", (ev) => {
      const newDirection = this.mapKeys[ev.code];
      if (
        !newDirection ||
        (newDirection === "right" && this.direction === "left") ||
        (newDirection === "left" && this.direction === "right") ||
        (newDirection === "down" && this.direction === "up") ||
        (newDirection === "up" && this.direction === "down")
      ) {
        return;
      }

      this.direction = this.mapKeys[ev.code] || this.direction;
    });
  };

  render = () => {
    this.allCells.map((td) => td.classList.remove("selected"));

    const cssSelector = this.snake
      .getCoordinates()
      .map(([coordX, coordY]) => `.row-${coordY} .cell-${coordX}`)
      .join(",");

    Array.from(document.querySelectorAll(cssSelector)).map((td) =>
      td.classList.add("selected")
    );
  };

  update = () => {
    let [posX, posY] = this.snake.getHeadCoordinates();
    switch (this.direction) {
      case "right":
        posX = posX < this.NUM_CELLS - 1 ? posX + 1 : 0;
        break;
      case "left":
        posX = posX > 0 ? posX - 1 : this.NUM_CELLS - 1;
        break;
      case "up":
        posY = posY > 0 ? posY - 1 : this.NUM_ROWS - 1;
        break;
      case "down":
        posY = posY < this.NUM_ROWS - 1 ? posY + 1 : 0;
        break;
    }
    this.snake.move([posX, posY]);
  };
}
