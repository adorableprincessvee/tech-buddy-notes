import React, { useState } from 'react'
import NoteCard from '../components/NoteCard';

function Home() {
    const [notes, setNote] = useState([]);
    const [input, setinput] = useState([]);

    const [editingIndex, setEditingIndex] = useState(null);
    const [editText, setEditText] = useState("");

    function addNote() {
        if (input.trim() === "") return;
            setNote([...notes, input]);
            setinput("");
            
    }
    
    return (
        <div className='p-8 max-w-2xl mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>My Learning Notes</h1>

            <div className='flex gap-2 mb-6'>
                <input
                    type="text" 
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                    placeholder='Write a Note'
                    className='flex-1 border p-2 rounded'
                />

                <button onClick={addNote}
                className='bg-black text-white px-4 rounded'>
                    Add
                </button>
            </div>

            <div className='space-y-3'>
                {notes.map((note, index) => (
                    <div key={index} className='bg-white p-4 rounded-lg shadow flex justify-between items-center'>

                        {editingIndex === index ? (
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                className='border p-1 rounded flex-1 mr-2'
                            />

                        ) : (
                            <p className='text-gray-800'>{notes}</p>
                        )}
                        
                        <div className='flex gap-2'>
                            {editingIndex === index ? (
                                <button
                                    onClick={() => {
                                        const updatedNotes = [...notes];
                                        updatedNotes[index] = editText;
                                        setNote(updatedNotes);
                                        setEditingIndex(null);
                                    }}
                                    className='text-green-600'
                                > Save </button>  
                                
                                ) : (
                                    <button
                                        onClick={() => {
                                            setEditingIndex(index);
                                            setEditText(notes);
                                        }}
                                        className='text-blue-500'
                                    > Edit </button>
                                
                            )}

                            <button
                                onClick={() =>
                                    setNote(notes.filter((_, i) => i !== index))
                                }
                                className='text-red-500'
                                > Delete </button>
                            </div>
                        </div>
                ))}

                {notes.length === 0 && (
                    <p className='text-gray-500 text-center'>
                        No notes yet. Add one
                    </p>
                )}
            </div>
        </div>
    );}            

export default Home