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
            text: "Benefits",
            url: "#benefits"
        },

    ],
    email: 'support@parentfullyapp.com',
    telephone: '+1 514 249 7924',
    socials: {
        youtube: 'https://youtube.com',
        instagram: 'https://www.instagram.com',
        whatsapp: 'https://chat.whatsapp.com/EhY7ONsphWX1NmBmhGTHUS?mode=ems_copy_chat_link',
        telegram: 'https://t.me/+NJfluxRPQsBlZGI5',
    }
}