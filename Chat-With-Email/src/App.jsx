import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import "./App.css";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <>
      <h1>
        Send Email{" "}
        <img src="https://img.icons8.com/arcade/64/null/new-post--v2.png" />
      </h1>
      <div className="Main">
        <ContactList
          contacts={contacts}
          selectedContact={to}
          onSelect={(contact) => setTo(contact)}
        />
        <Chat key={to.id} contact={to} />
      </div>
    </>
  );
}

const contacts = [
  { id: 0, name: "Person 1", email: "Person1@mail.com" },
  { id: 1, name: "Person 2", email: "Person2@mail.com" },
  { id: 2, name: "Person 3", email: "Person3@mail.com" },
  { id: 3, name: "Person 4", email: "Person4@mail.com" },
  { id: 4, name: "Person 5", email: "Person5@mail.com" },
];
