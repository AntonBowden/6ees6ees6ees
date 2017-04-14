class ForagerBee extends HoneyMakerBee {
  constructor() {
    super();
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(trasure) {
    this.treasureChest.push(trasure);
  }



};
