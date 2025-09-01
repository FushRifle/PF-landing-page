import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Parenting Together Made Simple, Connected & Effective.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "About Us",
            url: "#about"
        },
        {
            text: "Contact",
            url: "#contact"
        }
    ],
    email: 'parentfully@gmail.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // youtube: 'https://youtube.com',
        // threads: 'https://www.threads.net',
        //facebook: 'https://facebook.com',
        // linkedin: 'https://www.linkedin.com',
        //instagram: 'https://www.instagram.com',
        whatsapp: 'https://chat.whatsapp.com/EhY7ONsphWX1NmBmhGTHUS?mode=ems_copy_chat_link',
        telegram: 'https://t.me/+NJfluxRPQsBlZGI5',
    }
}