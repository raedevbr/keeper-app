import React, { useState } from "react";

function Form(props) {

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setInputText({
            ...inputText,
            [name]: value
        });
    }

    return (
        <form>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={inputText.title}
                onChange={handleInputChange}
            />
            <textarea
                name="content"
                placeholder="Take a note..."
                rows={3}
                value={inputText.content}
                onChange={handleInputChange}
            />
            <button onClick={(event) => {
                props.onAdd(inputText)
                setInputText({
                    title: "",
                    content: ""
                });
                event.preventDefault();
            }}>Add</button>
        </form>
    );
}

export default Form;