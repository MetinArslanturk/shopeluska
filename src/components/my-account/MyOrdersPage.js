import React from 'react';
import { connect } from 'react-redux'

export class MyOrdersPage extends React.Component {
    render() {
        return (
            <>
                My Orders page.
            </>
        )
    }
}

export default connect(undefined)(MyOrdersPage);