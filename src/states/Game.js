/* globals __DEV__ */
import Phaser from 'phaser'
import Girl from '../sprites/Girl'
import Part from '../sprites/Part'
import Cat from '../sprites/Cat'
import { centerGameObjects } from '../utils'
import { Particles } from 'phaser-ce';

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    centerGameObjects([this.loaderBg])    



    this.girl = new Girl({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'body-small-0'
    })
    this.eyes = new Part({game: this.game, asset: 'eyes-0'});
    this.girl.addEyes(this.eyes);
    this.hair = new Part({game: this.game, asset: 'hair-0'});    
    this.girl.addHair(this.hair);
    this.pant = new Part({game: this.game, asset: 'pant-0'});    
    this.girl.addPant(this.pant);
    this.coat = new Part({game: this.game, asset: 'coat-0'});    
    this.girl.addCoat(this.coat);
    this.shoes = new Part({game: this.game, asset: 'shoes-0'});    
    this.girl.addShoes(this.shoes);
    this.hat = new Part({game: this.game, asset: 'hat-0'});    
    this.girl.addHat(this.hat);
    this.game.add.existing(this.girl);


    this.cat = new Cat({
      game: this.game,
      x: this.world.centerX + 100,
      y: this.world.centerY + 100,
      width: 80,
      height: 80,
      assets: ['cat-0', 'cat-1', 'cat-2', 'cat-3']
    })

    this.game.add.existing(this.cat);
    
  }

  render () {
  }
}
