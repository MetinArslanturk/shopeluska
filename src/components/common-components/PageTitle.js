import React from 'react';
import { Helmet } from 'react-helmet';

const defaultTitle = 'Shopeluska';

const PageTitle = React.memo(({ title }) => {
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
});

export { PageTitle };