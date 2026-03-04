import React from "react";

const TermsOfService = () => {
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
          importantNote: {
               backgroundColor: "#f8f9fa",
               padding: "15px",
               borderRadius: "8px",
               borderLeft: "4px solid #2c3e50",
               margin: "20px 0",
               fontStyle: "italic",
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
                    <h1>Parentfully – Terms of Service</h1>
                    <p><strong>Effective Date:</strong> 27th September, 2025</p>
               </header>

               <p>
                    These Terms of Service (“Terms”) constitute a legally binding agreement between you and
                    <strong> Parentfully (Pilandres Inc.)</strong> (“Parentfully,” “we,” “our,” or “us”) governing
                    your access to and use of the Parentfully mobile application, website, and related services
                    (collectively, the “Services”).
               </p>

               <p style={{ fontWeight: "bold" }}>
                    By creating an account, accessing, or using the Services, you acknowledge and agree to be
                    bound by these Terms. If you do not agree, you must not use the Services.
               </p>

               <h2 style={styles.sectionTitle}>1. Eligibility</h2>
               <ul style={styles.list}>
                    <li style={styles.listItem}>You must be at least 18 years of age and have legal capacity to enter into these Terms.</li>
                    <li style={styles.listItem}>By inviting co-parents, guardians, or third parties, you represent and warrant that they will comply with these Terms.</li>
               </ul>

               <h2 style={styles.sectionTitle}>2. User Responsibilities</h2>
               <ul style={styles.list}>
                    <li style={styles.listItem}>Provide accurate and current information.</li>
                    <li style={styles.listItem}>Use the Services solely for lawful, family-related purposes.</li>
                    <li style={styles.listItem}>Not upload, post, or transmit unlawful, harmful, defamatory, or infringing content.</li>
                    <li style={styles.listItem}>Respect the confidentiality and privacy of information shared within your family group.</li>
               </ul>

               <h2 style={styles.sectionTitle}>3. Parentfully’s Services</h2>
               <div style={styles.importantNote}>
                    Parentfully provides organizational and communication tools for parents and guardians.
                    Parentfully does not provide medical, legal, financial, or professional advice. The
                    Services are intended for informational and organizational purposes only.
               </div>

               <h2 style={styles.sectionTitle}>4. Subscriptions and Payments</h2>
               <ul style={styles.list}>
                    <li style={styles.listItem}>Certain features are available only through paid subscriptions (“Premium”).</li>
                    <li style={styles.listItem}>Subscription fees will be billed via authorized providers.</li>
                    <li style={styles.listItem}>Subscriptions automatically renew unless cancelled before the renewal date.</li>
                    <li style={styles.listItem}>Parentfully reserves the right to modify subscription pricing with reasonable advance notice.</li>
               </ul>

               <h2 style={styles.sectionTitle}>5. Termination and Suspension</h2>
               <ul style={styles.list}>
                    <li style={styles.listItem}>You may terminate your account at any time through the app.</li>
                    <li style={styles.listItem}>Parentfully may suspend or terminate access if you violate these Terms, misuse the Services, or engage in harmful activity.</li>
                    <li style={styles.listItem}>Upon termination, your right to access the Services ceases immediately.</li>
               </ul>

               <h2 style={styles.sectionTitle}>6. Intellectual Property</h2>
               <p>
                    All intellectual property rights in the Services, including content, design, and software,
                    are owned by Parentfully or its licensors. You retain ownership of content you upload.
                    By uploading, you grant Parentfully a non-exclusive, worldwide, royalty-free license to
                    process and display such content solely to operate the Services.
               </p>

               <h2 style={styles.sectionTitle}>7. Disclaimers</h2>
               <ul style={styles.list}>
                    <li style={styles.listItem}>The Services are provided on an “AS IS” and “AS AVAILABLE” basis.</li>
                    <li style={styles.listItem}>Parentfully disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.</li>
                    <li style={styles.listItem}>Parentfully is not responsible for disputes, disagreements, or outcomes between co-parents or guardians.</li>
               </ul>

               <h2 style={styles.sectionTitle}>8. Limitation of Liability</h2>
               <p>To the maximum extent permitted by law:</p>
               <ul style={styles.list}>
                    <li style={styles.listItem}>Parentfully’s liability shall not exceed the greater of (i) $100 or (ii) the fees paid by you in the twelve months preceding the claim.</li>
                    <li style={styles.listItem}>Parentfully shall not be liable for indirect, incidental, special, or consequential damages arising from use of the Services.</li>
               </ul>

               <h2 style={styles.sectionTitle}>9. Governing Law and Dispute Resolution</h2>
               <p>
                    These Terms shall be governed by and construed in accordance with the laws of
                    <strong> [Your Jurisdiction]</strong>, without regard to conflict of law principles. Any
                    disputes shall be subject to the exclusive jurisdiction of the courts located
                    in <strong> [Your Location]</strong>.
               </p>

               <h2 style={styles.sectionTitle}>10. Changes to Terms</h2>
               <p>
                    Parentfully may modify these Terms at any time. Material changes will be communicated
                    via app notification or email. Continued use of the Services after changes take effect
                    constitutes acceptance.
               </p>

               <footer style={styles.footer}>
                    <h2 style={{ fontSize: "1.2rem", color: "#2c3e50" }}>11. Contact</h2>
                    <p>Questions about these Terms may be directed to:</p>
                    <p>Email: <strong>admin@parentfullyapp.com</strong></p>
               </footer>
          </div>
     );
};

export default TermsOfService;