import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  console.log(props);
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body" id="note">
          <div className=" d-flex align-items-center justify-content-between">
            <h5 className="card-title text-break  my-2">{note.title}</h5>
            <div className=" d-flex ">
              <i
                className="far fa-trash-alt mx-2 "
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted Successfully ", "success");
                }}
                style={{ cursor: "pointer" }}
              ></i>
              <i
                className="far fa-edit mx-2"
                onClick={() => {
                  updateNote(note);
                }}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
          <p className="my-3 card-text text-wrap">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
