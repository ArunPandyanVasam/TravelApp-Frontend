import React, { useState } from "react";
import { Form, Button, ListGroup, InputGroup, Alert } from "react-bootstrap";
import { FaTrash, FaUserPlus } from "react-icons/fa";
import styles from "./TrustedContacts.module.css";

const TrustedContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const handleAddContact = () => {
    if (!name || !phone) {
      setError("Both name and phone number are required.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    setContacts([...contacts, { name, phone }]);
    setName("");
    setPhone("");
    setError(null);
  };

  const handleDeleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.contactsContainer}>
      <h3>Trusted Contacts</h3>

      {error && <Alert variant="danger">{error}</Alert>}

      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Contact Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button variant="success" onClick={handleAddContact}>
          <FaUserPlus /> Add
        </Button>
      </InputGroup>

      <ListGroup>
        {contacts.length === 0 ? (
          <p className={styles.noContacts}>No contacts added.</p>
        ) : (
          contacts.map((contact, index) => (
            <ListGroup.Item key={index} className={styles.contactItem}>
              <span>
                <strong>{contact.name}</strong> - {contact.phone}
              </span>
              <Button variant="danger" size="sm" onClick={() => handleDeleteContact(index)}>
                <FaTrash />
              </Button>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </div>
  );
};

export default TrustedContacts;
