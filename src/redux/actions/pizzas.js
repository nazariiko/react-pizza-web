import axios from 'axios'

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortName) => (dispatch) => {
  dispatch(setLoaded(false));
  setTimeout(() => axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortName}&_order=asc`).then(({ data }) => {
    dispatch(setPizzas(data))
  }), 500);
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

