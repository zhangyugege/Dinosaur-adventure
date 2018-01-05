import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    //
    // load your assets
    //
  this.load.pack("level", "assets/assets-pack.json");
}

  create () {
    this.state.start('Game')
  }
}
