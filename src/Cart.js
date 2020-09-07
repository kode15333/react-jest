import React, {useEffect} from 'react';

const Cart = (props) => {
    useEffect(() => {
        const timerID = setTimeout(() => {
            props.onSelect(null);
        }, 500);
        return () => {
            clearTimeout(timerID)
        }
    }, [props.onSelect]);
    return [1,2,3,4,5].map(choice => (
        <button
            key={choice}
            data-testid={choice}
            onChange={() => props.onSelect(choice)}
        >
            {choice}
        </button>
    ));
};

export default Cart;
