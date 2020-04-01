import React from 'react';
import { connect } from 'react-redux'

const Child = (props) => {
    return (
        <div>
            Bana gelen data : {props.name}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      name: state.namedValue
    }
  } 
  
  export default connect(mapStateToProps)(Child);