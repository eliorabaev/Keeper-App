import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleAdd(event) {
    event.preventDefault();
    if (note.title === "" || note.content === "")
      return alert("Please add text to the title and content");
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title*"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note...*"
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
