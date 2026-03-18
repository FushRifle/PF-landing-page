import { Zap, ShieldCheck, CreditCard, Settings } from "lucide-react";

export const helpArticles = [
    {
        id: "invite-co-parent",
        category: "Getting Started",
        title: "How to invite a co-parent",
        description: "Everything you need to know about setting up your shared family space.",
        content: `
            <p>Setting up your family group is the first step toward conflict-free parenting. When you invite a co-parent, they gain access to shared calendars, goal trackers, and documents.</p>
            
            <h3>Step-by-Step Instructions</h3>
            <ol>
                <li>Open the Parentfully app and tap the <strong>Settings</strong> icon.</li>
                <li>Select <strong>Family Group</strong> from the menu.</li>
                <li>Tap the <strong>Invite Member</strong> button.</li>
                <li>Enter their email address or phone number to send a secure link.</li>
            </ol>

            <h3>What can they see?</h3>
            <p>By default, invited members can view and edit shared events. However, your <strong>Private Journal</strong> remains completely hidden from them unless you specifically choose to share an entry.</p>
        `
    },
    {
        id: "security-basics",
        category: "Account & Security",
        title: "Is my data secure?",
        description: "Understanding our end-to-end encryption and data policies.",
        content: `
            <p>At Parentfully, we use bank-grade encryption to ensure your family's sensitive information stays private.</p>
            <h3>How we protect you:</h3>
            <ul>
                <li><strong>End-to-End Encryption:</strong> Private messages are encrypted from the moment you send them.</li>
                <li><strong>No Data Selling:</strong> We never sell your personal information to third parties or advertisers.</li>
                <li><strong>Secure Cloud:</strong> We use AWS and Firebase with advanced firewall protection.</li>
            </ul>
        `
    },
    {
        id: "subscription-management",
        category: "Subscriptions",
        title: "Managing your Premium subscription",
        description: "How to upgrade, cancel, or change your billing details.",
        content: `
            <p>Parentfully Premium offers advanced features like document storage and unlimited goal tracking.</p>
            <h3>How to cancel:</h3>
            <p>Since all payments are handled via the App Store or Google Play Store, you must manage your subscription through your phone's native settings.</p>
        `
    }
];

export const helpCategories = [
    { id: "getting-started", title: "Getting Started", icon: Zap, color: "text-orange-500", count: "12 articles" },
    { id: "security", title: "Account & Security", icon: ShieldCheck, color: "text-emerald-500", count: "8 articles" },
    { id: "billing", title: "Subscriptions", icon: CreditCard, color: "text-blue-500", count: "5 articles" },
    { id: "devices", title: "Syncing & Devices", icon: Settings, color: "text-purple-500", count: "10 articles" },
];

export const faqs = [
    {
        q: "How do I invite a co-parent to my group?",
        a: "Navigate to Settings > Family Group > Invite Member. You can send a unique invite link via SMS or Email. Once they join, all your calendars and goals will sync instantly."
    },
    {
        q: "Is my data private from other family members?",
        a: "Shared features like the Calendar and Expense tracker are visible to the group. However, your Private Journal and personal reminders are encrypted and visible only to you."
    },
    {
        q: "Can I manage multiple households?",
        a: "Yes. Use the 'Switch House' feature in the profile menu to jump between different family setups. Perfect for complex co-parenting arrangements."
    },
    {
        q: "What happens to my data if I cancel Premium?",
        a: "Your data remains safe! You'll simply lose access to 'Premium-only' features like advanced document storage and unlimited goal tracking. You can downgrade at any time."
    },
    {
        q: "Can I export my family data?",
        a: "Absolutely. Go to Settings > Data & Privacy > Export Data to receive a CSV or PDF of your schedules, notes, and shared history."
    },
    {
        q: "Does Parentfully work offline?",
        a: "Yes. You can view your current schedule and notes without an internet connection. Any changes you make will sync as soon as you're back online."
    }
];