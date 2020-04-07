import React from 'react';
import { connect } from 'react-redux';
import {history} from '../routers/AppRouter';
const Header = (props) => {
    return (
        <div>
        
            <span onClick={(e) => history.push('/login')}>here is header !</span>
        </div>
    )
}

export default connect(undefined)(Header);