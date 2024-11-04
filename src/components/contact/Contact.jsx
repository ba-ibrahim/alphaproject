import Contactt from '../contact/contact.css';

export default function Contact() {
  return (
    <section className={styles.contactForm}>
      <h3>Still have questions?</h3>
      <p>Can’t find the answer you’re looking for? Please contact our customer service.</p>
      <form>
        <div className={styles.formGroup}>
          <input type="text" placeholder="First name" className={styles.inputField} />
          <input type="text" placeholder="Last name" className={styles.inputField} />
        </div>
        <input type="email" placeholder="Email address" className={styles.inputField} />
        <input type="tel" placeholder="Phone number" className={styles.inputField} />
        <textarea placeholder="Describe your issue" className={styles.textArea}></textarea>
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
    </section>
  );
}
