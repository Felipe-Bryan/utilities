import { get } from './api.service';

async function awake(seconds: number) {
  await get();

  setInterval(async () => {
    await get();
  }, seconds * 1000);
}

awake(180);
