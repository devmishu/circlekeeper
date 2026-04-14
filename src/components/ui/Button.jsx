import React from 'react';

const Button = ({ onClick, className, icon, children }) => {
    return (
        <button onClick={onClick} className={className}>{icon} {children}</button>
    );
};

export default Button;