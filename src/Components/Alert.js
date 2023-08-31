import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {

    const capital=(word)=>{
        const a = word.toLowerCase();
        return word.charAt(0).toUpperCase()+a.slice(1);
    }

    return (
        
         props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
        </div>
       
    )
}

export default Alert
