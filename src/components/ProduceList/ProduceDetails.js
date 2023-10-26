import { useDispatch, useSelector } from 'react-redux';
import { addItem, incrementItemCount } from '../../store/cart';
import { getCartItemByProduceId, toggleProduceLike } from '../../store/produce';

function ProduceDetails({ produce, setShowCart }) {
  const cartItem = useSelector(getCartItemByProduceId(produce.id))
  const dispatch = useDispatch();

  const handlePlusButton = () => {
    const itemExistsInCart = typeof cartItem === 'object';
    if (itemExistsInCart) {
      dispatch(incrementItemCount(cartItem.id));
      return;
    }
    dispatch(addItem(produce.id));
    setShowCart(true);
  };
  const handleLikeButton = () => dispatch(toggleProduceLike(produce));

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={handleLikeButton}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={handlePlusButton}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
