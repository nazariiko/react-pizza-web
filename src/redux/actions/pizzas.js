import axios from 'axios'
import { JSON_API } from '../../api';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (category, sortName) => (dispatch) => {
  dispatch(setLoaded(false));
  setTimeout(() => axios.get(`${JSON_API}/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortName}&_order=asc`).then(({ data }) => {
    dispatch(setPizzas(data))
  }), 300);
}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

