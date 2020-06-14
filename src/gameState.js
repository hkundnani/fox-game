const gameState = {
  current: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    return this.clock;
  },
  handleUserActions(icon) {
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)
    ) {
      // do nothing
      return;
    }
    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
      return;
    }
    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  startGame() {
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    this.current = "IDLING";
    this.wakeTime = -1;
  },
  changeWeather() {},
  cleanUpPoop() {},
  feed() {},
};

export const handleUserActions = gameState.handleUserActions.bind(gameState);
export default gameState;
