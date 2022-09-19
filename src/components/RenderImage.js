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
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.5) 0px 18px 36px -18px;',
            }}
        />
    )
}