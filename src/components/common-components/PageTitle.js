import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const defaultTitle = 'Shopeluska';

const PageTitle = React.memo(({ title = defaultTitle }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
});

PageTitle.propTypes = {
    title: PropTypes.string,
};

export { PageTitle };
