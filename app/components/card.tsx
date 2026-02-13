import React from 'react';

interface CardProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    children,
    className = '',
}) => {
    return (
        <div className={`border rounded-lg shadow-md p-6 bg-white ${className}`}>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            {description && <p className="text-gray-600 mb-4">{description}</p>}
            {children}
        </div>
    );
};