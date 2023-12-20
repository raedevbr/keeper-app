import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import Form from "./Form";
import Note from "./Note";

function App() {

    const [notes, setNotes] = useState([]);

    function onAdd(inputText) {
        if (inputText.title.trim() !== "" && inputText.content.trim() !== "") {
            setNotes([...notes, inputText]);
        }
    }

    function deleteNote(id) {
        setNotes(notes.filter((note, index) => {
            return index !== id
        }));
    }

    return (
        <>
            <Header />
            <Form onAdd={onAdd} />
            {notes.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />)}
            <Footer />
        </>
    );
}

export default App;