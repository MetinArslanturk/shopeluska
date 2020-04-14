import React from 'react';
import { connect } from 'react-redux';

export class MyProfilePage extends React.Component {
    render() {
        return (
            <>
                My Profile page.
            </>
        )
    }
}

export default connect(undefined)(MyProfilePage);