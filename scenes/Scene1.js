class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    create() {
        //tak sie tworzy tekst na ekranie
        this.add.text(50, 50, "Ladowanie...");
        this.scene.start("playGame");
    }
}