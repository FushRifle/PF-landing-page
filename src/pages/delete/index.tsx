import React from "react";

const DeleteAccount = () => {
     const styles = {
          container: {
               padding: "40px 20px",
               maxWidth: "800px",
               margin: "auto",
               fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
               color: "#333",
               lineHeight: "1.6",
          },
          header: {
               borderBottom: "2px solid #fee2e2", // Light red border
               paddingBottom: "10px",
               marginBottom: "20px",
               color: "#b91c1c", // Alert red
          },
          sectionTitle: {
               marginTop: "30px",
               fontSize: "1.3rem",
               color: "#2c3e50",
               display: "flex",
               alignItems: "center",
          },
          stepCard: {
               backgroundColor: "#fff5f5",
               borderLeft: "4px solid #f87171",
               padding: "20px",
               borderRadius: "0 8px 8px 0",
               margin: "20px 0",
          },
          list: {
               paddingLeft: "20px",
               marginTop: "10px",
          },
          listItem: {
               marginBottom: "10px",
          },
          warningBox: {
               backgroundColor: "#f8fafc",
               border: "1px solid #e2e8f0",
               padding: "15px",
               borderRadius: "8px",
               fontSize: "0.95rem",
               color: "#475569",
          },
          footer: {
               marginTop: "50px",
               paddingTop: "20px",
               borderTop: "1px solid #eee",
               textAlign: "center",
          },
          supportLink: {
               color: "#2563eb",
               fontWeight: "bold",
               textDecoration: "none",
          }
     };

     return (
          <div style={styles.container}>
               <header style={styles.header}>
                    <h1>Account Deletion Instructions</h1>
                    <p style={{ color: "#666", fontSize: "1.1rem" }}>
                         At Parentfully, you have full control over your personal data.
                    </p>
               </header>

               <h2 style={styles.sectionTitle}>How to Delete Your Account</h2>
               <div style={styles.stepCard}>
                    <p>Follow these steps within the mobile application:</p>
                    <ol style={{ ...styles.list, fontWeight: "500" }}>
                         <li style={styles.listItem}>Open the <strong>Parentfully</strong> app.</li>
                         <li style={styles.listItem}>Navigate to <strong>Settings</strong> (gear icon).</li>
                         <li style={styles.listItem}>Select <strong>Account</strong>.</li>
                         <li style={styles.listItem}>Tap <strong>Delete Account</strong> at the bottom of the screen.</li>
                         <li style={styles.listItem}>Confirm your decision in the final prompt.</li>
                    </ol>
               </div>

               <h2 style={styles.sectionTitle}>What Data Will Be Removed?</h2>
               <p>Upon processing your request, the following will be permanently deleted:</p>
               <ul style={styles.list}>
                    <li style={styles.listItem}>Your profile details (name, email, and password).</li>
                    <li style={styles.listItem}>All private messages and journal entries.</li>
                    <li style={styles.listItem}>Family relationships and shared group connections.</li>
                    <li style={styles.listItem}>Stored documents and uploaded media.</li>
               </ul>

               <h2 style={styles.sectionTitle}>Data Retention Policy</h2>
               <div style={styles.warningBox}>
                    <p>
                         <strong>Processing Time:</strong> Per our Privacy Policy, your data will be deleted or
                         anonymized within <strong>30 days</strong> of your request.
                    </p>
                    <p style={{ marginTop: "10px", marginBottom: 0 }}>
                         <strong>Legal Exceptions:</strong> Certain transactional records (e.g., subscription
                         history via RevenueCat or Apple/Google) may be retained for the minimum period
                         required by tax and financial laws.
                    </p>
               </div>

               <h2 style={styles.sectionTitle}>Important Note</h2>
               <p>
                    Account deletion is <strong>permanent</strong>. Once the process is complete,
                    Parentfully cannot recover your schedules, memories, or family data. If you have an
                    active Premium subscription, please ensure you cancel it through your App Store
                    settings to prevent further billing by third-party providers.
               </p>

               <footer style={styles.footer}>
                    <p>Having trouble deleting your account?</p>
                    <p>
                         Contact our support team at:{" "}
                         <a href="mailto:admin@parentfullyapp.com" style={styles.supportLink}>
                              admin@parentfullyapp.com
                         </a>
                    </p>
               </footer>
          </div>
     );
};

export default DeleteAccount;