import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }
  addEyes (item) {
    this.resetPart(this.eyes);
    item.x = 0;
    item.y = -40;  
    this.eyes = this.addChild(item); 
  }
  addHair (item) {
    this.resetPart(this.hair);
    item.x = 9;
    item.y = -45;  
    this.hair = this.addChild(item); 
  }
  addCoat (item) {
    this.resetPart(this.coat);
    item.x = 2;
    item.y = 35; 
    this.coat = this.addChild(item); 
  }
  addPant (item) {
    this.resetPart(this.pant);
    item.x = 0;
    item.y = 67;    
    this.pant = this.addChild(item); 
  }
  addShoes (item) {
    this.resetPart(this.shoes);
    item.x = -7;
    item.y = 110;    
    this.shoes = this.addChild(item); 
  }
  addHat (item) {
    this.resetPart(this.hat);
    item.x = -2;
    item.y = -90;    
    this.hat = this.addChild(item); 
  }
  resetPart (obj) {
    obj = null;
  }
  update () {
  }

}
