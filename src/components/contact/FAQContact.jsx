import FAQContactt from '../contact/FAQContact.css';

export default function FAQContact() {
  return (
    <div className={styles.container}>
      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2>Vous avez des question ?</h2>
        <p>Pour plus d’information checker notre FAQ, ou contacter notre équipe via le formulaire disponible en bas</p>
        <h3>Frequently asked questions</h3>
        <p>Question you might ask about our products and services.</p>
        
        <div className={styles.faqItems}>
          <div className={`${styles.faqItem} ${styles.open}`}>
            <button className={styles.question}>
              This is question number one that will be open by default?
            </button>
            <p className={styles.answer}>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
              the visual form of a document or a typeface without relying on meaningful content.
            </p>
          </div>
          <div className={styles.faqItem}>
            <button className={styles.question}>This is question will be closed by default?</button>
          </div>
          <div className={styles.faqItem}>
            <button className={styles.question}>This is question will be closed by default?</button>
          </div>
          <div className={styles.faqItem}>
            <button className={styles.question}>This is question will be closed by default?</button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactFormSection}>
        <h3>Still have questions?</h3>
        <p>Can’t find the answer you’re looking for? Please contact our customer service.</p>
        <form className={styles.contactForm}>
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
    </div>
  );
}
