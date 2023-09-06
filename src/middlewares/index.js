/* eslint-disable no-unused-vars */
export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

/*
  More middleware examples
*/

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};

export const prefix = (store) => (next) => (action) => {
  const prefixed = action.action.payload.map(pokemon => ({
    ...pokemon,
    name: 'Poke: ' + pokemon.name
  }))

  const updatedActionInfo = {
    ...action,
    action: { ...action.action, payload: prefixed }
  }
  next(updatedActionInfo);
}

