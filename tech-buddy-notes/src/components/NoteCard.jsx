import React from 'react'
import ThemeToggle from './ThemeToggle';

function NoteCard({text, onDelete}) {
    return (
        <div className='bg-white p-4 rounded-lg shadow'>
            <p className='text-gray-800'>{text}</p>

            <button onClick={onDelete}
            className='text-red-500 text-sm hover:text-red-700'>Delete</button>
        </div>

    );
}

export default NoteCard