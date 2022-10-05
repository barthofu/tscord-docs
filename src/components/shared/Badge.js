import React from 'react';

export default function Badge({ 
    children,
    color = 'limegreen'
}) {
    
    return (
        <span
            style={{
                backgroundColor: color,
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '12px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                display: 'inline-block',
                margin: '0 5px',
            }}
        >
            {children}
        </span>
    )
}