import React from "react";
import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";

const NotesList = () => {
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery(undefined, {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    console.log("hello");
    content = <p>{error?.data?.message}</p>;
  }

  if (isSuccess) {
    console.log("success");
    const { ids } = notes;

    const tableContent = ids?.length
      ? ids.map((noteId) => <Note key={noteId} noteId={noteId} />)
      : null;

    content = (
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Title</th>
            <th>Owner</th>
            <th>Edit</th>
          </tr>
          <tbody>{tableContent}</tbody>
        </thead>
      </table>
    );
  }
  return content;
};

export default NotesList;
