import React, { useState } from "react";
import styles from "./css/eventRegistrationForm.module.css";

const EventRegisterPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [validCheck, setValidCheck] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.instructions}>
        ***Fill all the form with correct informations. You might denied entry
        if not. We aim to provide a safe space for all out attendees so it's
        important for us to verify each and everyone identity through this
        form***
      </div>
      <div className={styles.form}>
        <form action="https://formspree.io/f/xwpebabz" method="POST">
          <div className={styles.inputDiv}>
            <label for="firstName">First Name:</label>
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Your Name..."
            />
          </div>

          <div className={styles.inputDiv}>
            <label for="studentEmail">Student Email:</label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              id="studentEmail"
              name="studentEmail"
              required
              placeholder="Your (.edu.in) email..."
            />
          </div>

          <div className={styles.inputDiv}>
            <label for="phone">Phone:</label>
            <input
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              type="number"
              id="phone"
              name="phone"
              required
              placeholder="Your phone..."
              maxLength="3"
            />
          </div>

          {/* <button type="submit"></button> */}

          <button
            type="submit"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className={styles.registerBtn}
          >
            REGISTER
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRegisterPage;
