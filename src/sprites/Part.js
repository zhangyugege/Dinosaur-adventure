import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, asset }) {
    super(game, 0, 0, asset)
    this.anchor.setTo(0.5)
  }

  update () {
  }

}
