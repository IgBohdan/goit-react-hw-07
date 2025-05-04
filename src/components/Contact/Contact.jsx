import React, { useState } from "react";
import { useDispatch } from "react-redux";
import people from "../../assets/people.svg";
import phone from "../../assets/phone.svg";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await dispatch(deleteContact(contact.id)).unwrap();
    } catch (error) {
      console.error("Failed to delete contact:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className={styles.contact}>
      <div>
        <span className={styles.line}>
          <img src={people} alt="people" />
          <p className={styles.text}>{contact.name}</p>
        </span>
        <span className={styles.line}>
          <img src={phone} alt="phone" />
          <p className={styles.text}>{contact.number}</p>
        </span>
      </div>
      <button
        type="button"
        onClick={handleDelete}
        className={styles.button}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default Contact;
