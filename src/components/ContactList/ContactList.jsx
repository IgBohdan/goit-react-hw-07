import React from "react";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      {isLoading ? (
        <div className={styles.loader}>
          <p>Loading...</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {filteredContacts.map((contact) => (
            <li key={contact.id} className={styles.item}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
