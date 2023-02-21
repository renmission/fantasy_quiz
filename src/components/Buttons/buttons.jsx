import React from 'react';
import PropTypes from 'prop-types';

function Buttons({
  product,
  isLoading,
  cartItem,
  addToCart,
  updateCartItem,
  deleteCartItem,
}) {
  return (
    <section aria-labelledby="options-heading" className="mt-4">
      {cartItem ? (
        <div className="flex items-center">
          <button
            type="button"
            // disabled={isLoading}
            className="flex flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
            onClick={() =>
              updateCartItem({
                ...cartItem,
                quantity: cartItem.quantity + 1,
              })
            }
          >
            +
          </button>
          <p className="flex-1 text-2xl font-bold text-center">
            {cartItem.quantity}
          </p>
          <button
            type="button"
            // disabled={isLoading}
            className="flex flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  disabled:bg-slate-500 disabled:cursor-wait"
            onClick={() => {
              if (cartItem.quantity <= 1) {
                deleteCartItem(cartItem);
              } else {
                updateCartItem({
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                });
              }
            }}
          >
            -
          </button>
        </div>
      ) : (
        <button
          type="button"
          // disabled={isLoading}
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
          onClick={() =>
            addToCart({
              productId: product.id,
              quantity: 1,
            })
          }
        >
          Add to bag
        </button>
      )}
    </section>
  );
}

Buttons.propTypes = {
  product: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.exact({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateCartItem: PropTypes.func.isRequired,
  deleteCartItem: PropTypes.func.isRequired,
  cartItem: PropTypes.shape({
    quantity: PropTypes.number,
  }),
};

Buttons.defaultProps = {
  cartItem: undefined,
};

export default Buttons;
