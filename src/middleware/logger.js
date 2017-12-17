const logger = store => next => action => {
  console.log("BEFORE", store.getState());
  next(action);
  console.log("AFTER", store.getState());
};

export default logger;
