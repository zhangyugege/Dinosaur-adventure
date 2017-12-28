import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, width, height, assets }) {
    super(game, x, y, assets[0])
    this.anchor.setTo(0.5)
    this.width = width;
    this.height = height;
  }

  update () {
    //   this.asset = 
  }

}
