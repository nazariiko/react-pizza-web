import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, SortPopup, PizzaBlock, PizzaLoaderBlock } from '../components'

import { setCategory, setSort } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  { name: 'популярности', type: 'rating' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortName } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSort = React.useCallback((sortName, toggleVisiblePopup) => {
    toggleVisiblePopup();
    dispatch(setSort(sortName))
  }, [])

  const onAddPizzaToCart = React.useCallback((pizza) => {
    dispatch(addPizzaToCart(pizza))
  }, [])

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortName));
  }, [category, sortName])

  // console.log('Home rendered');

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} onSelectCategory={onSelectCategory} items={categoryNames} />
        <SortPopup activeSort={sortName} onSelectSort={onSelectSort} items={sortNames} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((obj) => <PizzaBlock onAddPizzaToCart={onAddPizzaToCart} addedCount={cartItems[obj.id] && cartItems[obj.id].length} key={obj.id} {...obj} />) : Array(12).fill(0).map((_, index) => <PizzaLoaderBlock key={index} />)}
      </div>
    </div>
  )
}

export default Home