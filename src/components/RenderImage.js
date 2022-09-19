import React from 'react';

export default function RenderImage({ 
    src, 
    alt, 
    center = false,
}) {
    
    return (
        <img
            src={src}
            alt={alt || 'Image'}
            style={{
                borderRadius: '5px',
                ...(center && { display: 'block', margin: '0 auto' }),
                boxShadow: '0 0 20px rgba(0, 0, 0, .25)',
            }}
        />
    )
}