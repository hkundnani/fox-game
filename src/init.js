import gameState from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

const init = async () => {
  initButtons(gameState.handleUserActions);

  let nextTimeToTick = Date.now();

  const nextAnimationFrame = () => {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  };

  requestAnimationFrame(nextAnimationFrame);
};

init();
