import React from "react";

const PrivacyPolicy = () => {
     return (
          <div style={{ padding: 20, maxWidth: 800, margin: "auto", fontFamily: "sans-serif" }}>
               <h1>Parentfully Privacy Policy</h1>
               <p><strong>Effective date:</strong> March 3, 2026</p>
               <p>
                    Parentfully, developed by Pilandres Solutions, respects your privacy. This policy explains
                    how we collect, use, and store your information.
               </p>

               <h2>1. Information We Collect</h2>
               <ul>
                    <li>Account details: name, email, profile picture</li>
                    <li>Family connections and group information</li>
                    <li>Messages exchanged within the app</li>
                    <li>Payment and subscription data via RevenueCat</li>
                    <li>Device information: device type, OS version</li>
                    <li>Camera access (for profile pictures)</li>
               </ul>

               <h2>2. How We Use Your Information</h2>
               <ul>
                    <li>To provide and improve Parentfully services</li>
                    <li>To manage user accounts and family connections</li>
                    <li>To enable messaging between users</li>
                    <li>To process payments and subscriptions</li>
                    <li>To ensure app security and integrity</li>
               </ul>

               <h2>3. Sharing and Disclosure</h2>
               <p>
                    We do not sell your personal data. Data may be shared with RevenueCat for subscription
                    management and other service providers required to operate the app.
               </p>

               <h2>4. Data Retention</h2>
               <p>
                    Your account and messages are stored until you delete your account. Some transactional
                    data may be retained for legal or financial reasons.
               </p>

               <h2>5. Your Rights</h2>
               <p>
                    You can request deletion of your account and associated data. See{" "}
                    <a href="/delete">Account Deletion Instructions</a>.
               </p>

               <h2>6. Security</h2>
               <p>We implement industry-standard security measures to protect your data.</p>

               <h2>7. Contact Us</h2>
               <p>Email: support@pilandres.com</p>
          </div>
     );
};

export default PrivacyPolicy;