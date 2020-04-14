import React from 'react';
import { connect } from 'react-redux'

export class AdminPage extends React.Component {
    render() {
        return (
            <>
                Admin page.
            </>
        )
    }
}

export default connect(undefined)(AdminPage);