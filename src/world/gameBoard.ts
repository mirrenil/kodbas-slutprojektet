
let rectX1: number = 600;
let rectY1: number = 300;
let rectWidth: number = 100;
let rectHeight: number = 100;
let move = 5;


class GameBoard {
    private gameState: GameState;
    private life: Life;
    // private worldMap: WorldMap;
    // public character: Character;
    // private entities: Entity[];
    // private playerOne: Character;
    // private playerTwo: Character;



    constructor(gameState: GameState) {
        this.gameState = gameState;
        this.life = life;

    }

    // private windowBounderies() {
    //     if(rectX1 < 0) {
    //         rectX1 = rectX1 + move;
    //     }

    //     if(rectX1 > width) {
    //         rectX1 = rectX1 - move;
    //     }

    //     if(rectY1 < 0) {
    //        rectY1 = rectY1 + move;
    //     }

    //     if(rectY1 > height) {
    //        rectY1 =rectY1 - move;
    //     }
    // }

    // private checkCollisions() {


    // }

    // public keyPressed() {
    //     if (keyCode == 38 && keyIsPressed) {
    //         rectX1 = rectX1 - move;
    //     }

    //     if (keyCode == 40 && keyIsPressed) {
    //        rectY1 = rectY1 + move;
    //     }

    //     if (keyCode == 37 && keyIsPressed) {
    //         rectX1 = rectX1 - move;
    //     }

    //     if (keyCode ==  39 && keyIsPressed) {
    //         rectX1 = rectX1 + move;
    //     }
    // }

    public update() {


    }

    public draw() {
        // this.gameState.setGameState('Running');
        // // keyPressed();
        // // this.windowBounderies();
        // rectMode(CENTER);
        // noStroke();
        // fill(255);

        // // character test
        // rect(rectX1, rectY1, rectWidth, rectHeight);

    }

    public openGameBoard() {

    }

    public openGame() {


    }
}
