import { useState } from "react";

export default function Chat({ contact }) {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  function sending() {
    setText("");
    setSent(true);
  }

  return (
    <section className="chat">
      <textarea
        value={text}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={sending} className="Sending">
        Send to {contact.email}
      </button>
      {sent && <p>Your email has been successfully delivered.</p>}
    </section>
  );
}
