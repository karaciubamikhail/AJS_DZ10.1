import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => resolve(read()))
      .then((response) => {
        const obj = json(response);
        return obj;
      })
      .then((response) => JSON.parse(response));
  }
}
