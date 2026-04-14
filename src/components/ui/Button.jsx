import React from 'react';

const Button = ({ className, icon, children }) => {
    return (
        <button className={className}>{icon} {children}</button>
    );
};

export default Button;