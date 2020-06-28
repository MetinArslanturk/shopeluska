import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const ActionButton = ({
    type,
    text,
    onClickActionFunction,
    itemToArguments,
}) => {
    const handleOnClick = () => {
        onClickActionFunction(itemToArguments);
    };
    return (
        <>
            <Button
                type={type}
                className="action-button"
                onClick={handleOnClick}
            >
                {text}
            </Button>
        </>
    );
};

ActionButton.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onClickActionFunction: PropTypes.func,
    itemToArguments: PropTypes.any,
};

export default React.memo(ActionButton);
