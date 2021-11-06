import React from 'react';
import propTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onSelectCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onSelectCategory(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onSelectCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: propTypes.number,
  onSelectCategory: propTypes.func.isRequired,
  items: propTypes.arrayOf(propTypes.string).isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
