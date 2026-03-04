import React from "react";

const PrivacyPolicy = () => {
     const styles = {
          container: {
               padding: "40px 20px",
               maxWidth: "850px",
               margin: "auto",
               fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
               color: "#333",
               lineHeight: "1.6",
          },
          header: {
               borderBottom: "2px solid #eee",
               paddingBottom: "10px",
               marginBottom: "20px",
               color: "#1a1a1a",
          },
          sectionTitle: {
               marginTop: "30px",
               fontSize: "1.4rem",
               color: "#2c3e50",
          },
          list: {
               paddingLeft: "20px",
          },
          listItem: {
               marginBottom: "8px",
          },
          footer: {
               marginTop: "50px",
               paddingTop: "20px",
               borderTop: "1px solid #eee",
               fontSize: "0.9rem",
               color: "#666",
          },
     };

     return (
          <div style={styles.container}>
               <header style={styles.header}>
                    <h1>Parentfully – Privacy Policy</h1>
                    <p><strong>Effective Date:</strong> 27th September, 2025</p>
               </header>

               <p>
                    <strong>Parentfully (Pilandres Inc.)</strong> (“Parentfully,” “we,” “our,” or “us”) is committed to protecting the
                    privacy and security of your personal information. This Privacy Policy describes how we
                    collect, use, process, and disclose information in connection with our mobile application,
                    website, and related services (the “Services”).
               </p>
               <p>
                    By accessing or using the Services, you consent to the practices described in this Privacy Policy.
               </p>

               <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
               <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Account Information:</strong> Name, email address, password, and related registration details.</li>
                    <li style={styles.listItem}><strong>Family Information:</strong> Child’s name, age, notes, photo (optional), and family unit details.</li>
                    <li style={styles.listItem}><strong>Usage Data:</strong> Log files, device information, app activity, preferences, and settings.</li>
                    <li style={styles.listItem}><strong>User Content:</strong> Parenting goals, routines, schedules, messages, documents, and journal entries uploaded or created through the Services.</li>
               </ul>

               <h2 style={styles.sectionTitle}>2. How We Use Your Information</h2>
               <ul style={styles.list}>
                    <li style={styles.listItem}>To provide, operate, and maintain the Services.</li>
                    <li style={styles.listItem}>To synchronize calendars, goals, and plans across users in a family group.</li>
                    <li style={styles.listItem}>To send service-related notifications, reminders, and updates.</li>
                    <li style={styles.listItem}>To store and manage documents securely.</li>
                    <li style={styles.listItem}>To analyze anonymized or aggregated data to enhance product functionality.</li>
                    <li style={styles.listItem}>We do not sell or rent personal information to third parties.</li>
               </ul>

               <h2 style={styles.sectionTitle}>3. Sharing of Information</h2>
               <ul style={styles.list}>
                    <li style={styles.listItem}><strong>Within Family Group:</strong> Content you submit (e.g., routines, goals, documents) will be visible to co-parents or guardians you invite.</li>
                    <li style={styles.listItem}><strong>Service Providers:</strong> With third-party vendors who provide hosting, analytics, cloud storage, and technical support (e.g., AWS, Firebase).</li>
                    <li style={styles.listItem}><strong>Legal Compliance:</strong> Where required by applicable law, legal process, or to protect the safety of users or others.</li>
               </ul>

               <h2 style={styles.sectionTitle}>4. Data Security</h2>
               <p>
                    All data is stored on secure, encrypted servers. End-to-end encryption is implemented for
                    private messaging. Regular monitoring and security controls are in place to prevent unauthorized access.
               </p>

               <h2 style={styles.sectionTitle}>5. Children’s Privacy</h2>
               <p>
                    The Services are intended for parents/guardians, not children under 18. Child profile
                    information must be entered and managed solely by parents or guardians. We comply
                    with applicable child privacy laws, including COPPA and GDPR provisions.
               </p>

               <h2 style={styles.sectionTitle}>6. User Rights</h2>
               <p>You have the right to:</p>
               <ul style={styles.list}>
                    <li style={styles.listItem}>Access, correct, or delete personal information.</li>
                    <li style={styles.listItem}>Export your data in a structured, machine-readable format.</li>
                    <li style={styles.listItem}>Withdraw consent to processing at any time.</li>
               </ul>
               <p>Requests can be submitted to <strong>contact@parentfully.com</strong>.</p>

               <h2 style={styles.sectionTitle}>7. Data Retention</h2>
               <p>
                    We retain personal data for as long as necessary to provide the Services. If you delete
                    your account, we will delete or anonymize personal data within 30 days, except where
                    retention is required by law.
               </p>

               <h2 style={styles.sectionTitle}>8. Changes to Policy</h2>
               <p>
                    We may update this Privacy Policy from time to time. Material changes will be
                    communicated via email or prominent in-app notice.
               </p>

               <footer style={styles.footer}>
                    <h2 style={{ fontSize: "1.2rem", color: "#2c3e50" }}>9. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy, please contact us at:</p>
                    <p>Email: <strong>contact@parentfullyapp.com</strong></p>
               </footer>
          </div>
     );
};

export default PrivacyPolicy;