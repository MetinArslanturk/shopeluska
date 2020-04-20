import React from 'react';
import { Button } from 'antd';

const ActionButton = ({ type, text, onClickActionFunction, itemToArguments }) => {
    const handleOnclick = () => {
        onClickActionFunction(itemToArguments);
    };
console.log('rendered');
    return (
        <>
            <Button type={type} className="action-button" onClick={handleOnclick}>{text}</Button>
        </>
    );

}

export default React.memo(ActionButton);