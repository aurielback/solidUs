class Scene1 extends Phaser.Scene {

    constructor(){
        super("bootGame");
    }

    preload(){
        this.load.image("background", "assets/images/background.png");

        this.load.spritesheet("explosion", "assets/spritesheet/explosion.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("ship", "assets/spritesheet/ship.png", {
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("ship2", "assets/spritesheet/ship2.png", {
            frameWidth: 16,
            frameHeight: 16
        });
        
        this.load.spritesheet("ship3", "assets/spritesheet/ship3.png", {
            frameWidth: 16,
            frameHeight: 16
        });
    };

    create() {
        //tak sie tworzy tekst na ekranie
        this.add.text(50, 50, "Ladowanie...");
        this.scene.start("playGame");
    };
}