import { Link } from "react-router-dom";

const Welcome = () => {
  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  const content = (
    <section>
      <p>{today}</p>
      <h1>Welcome</h1>
      <p>
        <Link to="/dash/notes">View team notes</Link>
      </p>
      <p>
        <Link to="/dash/notes/new">Add new team note</Link>
      </p>
      <p>
        <Link to="/dash/users">View user settings</Link>
      </p>
      <p>
        <Link to="/dash/users/new">Add new user</Link>
      </p>
    </section>
  );
  return content;
};

export default Welcome;
