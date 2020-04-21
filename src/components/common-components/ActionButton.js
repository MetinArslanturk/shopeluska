import React from 'react';
import { Button } from 'antd';

const ActionButton = ({ type, text, onClickActionFunction, itemToArguments }) => {
    const handleOnclick = () => {
        onClickActionFunction(itemToArguments);
    };
    return (
        <>
            <Button type={type} className="action-button" onClick={handleOnclick}>{text}</Button>
        </>
    );

}

export default React.memo(ActionButton);