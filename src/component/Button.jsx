import React from 'react';

export default function Button(props){

    const getButtonColorByProps = () => {
        switch (props.type){
            case 'primary' : return 'btn-primary';
            case 'secondary' : return 'btn-secondary';
            case 'success' : return 'btn-success';
            default : return 'btn-primary'
        }
    }


    return(

        <button type="button" className={`btn ${getButtonColorByProps()}`} onClick={props.handleClick}>
            {
                props.loading ? 'Loading...' : props.children
            }
        </button>

    )
}