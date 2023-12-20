import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";

function Form(props) {

    const [isExpanded, setExpanded] = useState(false);

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

    function handleAddOnClick(event) {
        props.onAdd(inputText)
        setInputText({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <form className="create-note">

            {isExpanded &&
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={inputText.title}
                    onChange={handleInputChange}
                />
            }

            <textarea
                name="content"
                placeholder="Take a note..."
                rows={isExpanded ? "3" : "1"}
                value={inputText.content}
                onChange={handleInputChange}
                onClick={() => setExpanded(true)}
            />

            <Zoom in={isExpanded}>
                <Fab onClick={handleAddOnClick}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    );
}

export default Form;