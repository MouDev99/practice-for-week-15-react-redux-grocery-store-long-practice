import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementItemCount,
  incrementItemCount,
  removeItem,
  updateItemCountWithInputValue
} from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const id = item.id;
  const handleRemoveItemButton = () => dispatch(removeItem(id));
  const handleIncrementItemButton = () => dispatch(incrementItemCount(id));
  const handleDecrementItemButton = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(decrementItemCount(id));
    } else {
      dispatch(removeItem(id));
    };
  };

  const handleCountUpdate  = (e) => {
    const inputValue = parseInt(e.target.value);
    if (inputValue < 1 ) {
      dispatch(removeItem(id));
      return;
    };
    dispatch(updateItemCountWithInputValue(id, inputValue));
  };

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          onBlur={handleCountUpdate}
        />
        <button
          className="cart-item-button"
          onClick={handleIncrementItemButton}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={handleDecrementItemButton}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleRemoveItemButton}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
