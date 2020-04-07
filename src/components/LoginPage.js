import React from 'react';
import { connect } from 'react-redux';
import {useMountEffect} from '../helpers/mounteffect';
import {hideSidebar} from '../actions/layout';

const LoginPage = ({hideSidebar}) => {

    useMountEffect(() => {
        hideSidebar();
    })

    return (
        <div>This is Login Page. </div>
    );
}



const mapDispatchToProps = (dispatch) => ({
    hideSidebar: () => dispatch(hideSidebar())
})
export default connect(undefined, mapDispatchToProps)(LoginPage);