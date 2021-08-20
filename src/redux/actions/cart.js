export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_TO_CART',
  payload: pizzaObj,
})

export const plusPizza = (id) => ({
  type: 'PLUS_PIZZA',
  payload: id,
})

export const minusPizza = (id) => ({
  type: 'MINUS_PIZZA',
  payload: id,
})

export const deletePizzafromCart = (id) => ({
  type: 'DELETE_PIZZA_FROM_CART',
  payload: id,
})



