import React from 'react';
import { Button } from 'antd';

const ActionButton = ({ type, text, onClickActionFunction, itemToArguments }) => {
    const handleOnClick = () => {
        onClickActionFunction(itemToArguments);
    };
    return (
        <>
            <Button type={type} className="action-button" onClick={handleOnClick}>{text}</Button>
        </>
    );

}

export default React.memo(ActionButton);