const error = () => (next) => async (action) => {
    const { type, payload, meta } = action;
    const match = /(.*)_(FAIL)/.exec(type);
    if (match) {
      next({
        type,
        meta,
        payload: {
          message: payload.message,
          title: `${type
            .split("_")
            .map((x, i) => {
              if (i === 0) {
                return `${x[0].toUpperCase()}${x.slice(1).toLocaleLowerCase()}`;
              }
              return x.toLocaleLowerCase();
            })
            .join(" ")} fail`,
        },
      });
    } else {
      next(action);
    }
  };
  
  export default error;
  