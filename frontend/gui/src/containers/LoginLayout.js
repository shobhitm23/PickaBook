import React from 'react';
import Block from 'react-blocks';
import Background from '../images/books.jpg';

const CenteredLayout = (props) => {
    return (
        <div>
            <img src={Background} alt="bg"
            style={{
                minHeight: '100%',
                minWidth: 1024,
                width: '100%',
                height: 'auto',

                position: 'fixed',
                left: '0',
                top: '0',
            }} />
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: 10,
                backgroundColor: '#D3D3D3', 
                
            }} >
            
                {props.children}
            
            </div>
        </div>
    );    
};

export default CenteredLayout;