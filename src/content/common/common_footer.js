// content/footer.js

import Logo from '../../assets/LfLogo.svg';

export const footer_content = {
    brand: {
        name: 'Loom Freight',
        logo: Logo,
        description: `Loom Freight group of Companies was established in 1968 with Head Office in Abu Dhabi and Branches in Dubai, Sharjah, AL AIN, Al Ghuaifat, Al Maziyat and Associated offices in other major Gulf Cities.
Since Loom Freight's establishment, it specialized in providing services to the Oil, Petrochemical, Telecommunication and Power Industry Projects in the region.`,
    },

    socials: [
        { name: 'instagram', link: '#' },
        { name: 'youtube', link: '#' },
        { name: 'linkedin', link: '#' },
        { name: 'twitter', link: '#' },
        { name: 'discord', link: '#' },
    ],

    quick_links: [
        { label: 'Our Services', link: '#' },
        { label: 'About Us', link: '#' },
        { label: 'Contact Us', link: '#' },
    ],

    contact: {
        address: 'Loom Freight Head Office, Mezzanine Floor, Burj Al Arab Building, Hamdan Street, Abu Dhabi, UAE',

        items: [
            { type: 'phone', value: '+971 6 878 8877', link: 'tel:+97168788877' },
            { type: 'email', value: 'admin@loomfreight.com', link: 'mailto:admin@loomfreight.com' },
            { type: 'time', value: 'Mon - Fri 08:00 - 17:00' },
            { type: 'time', value: 'Sat 08:00 - 13:00', fullWidth: true },
        ],
    },
};