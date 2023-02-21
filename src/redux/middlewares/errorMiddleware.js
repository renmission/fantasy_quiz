// import axiosInstance from '../../utils/axiosInstance';

const error = () => next => async action => {
  const { type, payload, meta } = action;
  const match = /(.*)_(FAIL)/.exec(type);
  if (match) {
    next({
      type,
      meta,
      payload: {
        message: payload.message,
        title: `${type
          .split('_')
          .map((x, i) => {
            if (i === 0) {
              return `${x[0].toUpperCase()}${x.slice(1).toLocaleLowerCase()}`;
            }
            return x.toLocaleLowerCase();
          })
          .join(' ')}`,
      },
    });
  } else {
    next(action);
  }

  //   const {
  //     user: { user },
  //   } = store.getState();
  //   const match = /(.*)_(FAIL)/.exec(action.type);

  //   if (match) {
  //     await axiosInstance.post('errors', {
  //       user,
  //       ...action.payload,
  //       createdAt: new Date(),
  //     });
  //   }

  //   next(action);
};

export default error;



// const error = store => next => async action => {
//   try {
//     const match = /(.*)_(FAIL)/.exec(action.type);

//     const {
//       user: { user },
//     } = store.getState();

//     if (match) {
//       await axiosInstance.post('errors', {
//         user,
//         ...action.payload,
//         createdAt: new Date(),
//       });
//     }

//     next(action);
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default error;
