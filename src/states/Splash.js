import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('body-small-0', 'assets/images/body-small-0.png')
    this.load.image('eyes-0', 'assets/images/eyes-0.png')
    this.load.image('coat-0', 'assets/images/coat-0.png')
    this.load.image('hair-0', 'assets/images/hair-0.png')
    this.load.image('pant-0', 'assets/images/pant-0.png')
    this.load.image('shoes-0', 'assets/images/shoes-0.png')
    this.load.image('hat-0', 'assets/images/hat-0.png')

    this.load.image('cat-0', 'assets/images/cat-0-00.png')
    this.load.image('cat-1', 'assets/images/cat-0-01.png')
    this.load.image('cat-2', 'assets/images/cat-0-02.png')
    this.load.image('cat-3', 'assets/images/cat-0-03.png')
  }

  create () {
    this.state.start('Game')
  }
}
