import React, {Component} from 'react';
import './Modal.css';
export default function Modal(props){
        return (
            <div className='Modal'
            style={{
                transform: props.visible ? 'translateY(0vh' : 'translatey-100vh',
                opacity: props.visible ? '1' :'0'
            }}

            >
                <button onClick={props.cache} >Cancel</button>
            </div>
        );
    }