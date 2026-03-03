import React from "react";

const DeleteAccount = () => {
     return (
          <div style={{ padding: 20, maxWidth: 800, margin: "auto", fontFamily: "sans-serif" }}>
               <h1>Parentfully Account Deletion Instructions</h1>
               <p>
                    At Parentfully, you have full control over your account data.
               </p>

               <h2>Steps to Delete Your Account</h2>
               <ol>
                    <li>Open Parentfully app</li>
                    <li>Go to <strong>Settings → Account → Delete Account</strong></li>
                    <li>Confirm your decision</li>
               </ol>

               <h2>What Data Will Be Deleted</h2>
               <ul>
                    <li>Your profile and account details</li>
                    <li>All messages you sent or received</li>
                    <li>Family relationships associated with your account</li>
                    <li>Payment/subscription information stored in app</li>
               </ul>

               <h2>What Data May Be Retained</h2>
               <p>
                    Some transactional or legal records (e.g., payment history) may be retained for compliance,
                    limited to legal retention periods.
               </p>

               <h2>After Deletion</h2>
               <p>
                    Your account will be permanently removed within 7 days. You will no longer be able to access
                    Parentfully services.
               </p>

               <h2>Need Help?</h2>
               <p>Email: support@pilandres.com</p>
          </div>
     );
};

export default DeleteAccount;