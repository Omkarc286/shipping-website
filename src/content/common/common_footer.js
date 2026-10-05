// content/footer.js

import Logo from '../../assets/LfLogo.svg';

export const footer_content = {
    brand: {
        name: 'Loom Freight',
        logo: Logo,
        description: `Loom Freight is backed by a team with 37 years of combined professional experience, providing logistics and project support for the oil and gas, petrochemical, telecommunications, and power industries. We tailor our services to each client’s operational needs, combining careful planning, responsive communication, and efficient coordination. Our commitment is to deliver dependable service and build lasting partnerships across the region.`,
    },

    socials: [
        { name: 'instagram', link: '#' },
        { name: 'linkedin', link: '#' },
        { name: 'twitter', link: '#' },
    ],

    quick_links: [
        { label: 'Our Services', link: '#' },
        { label: 'About Us', link: '#' },
        { label: 'Contact Us', link: '#' },
    ],

    contact: {
        address: `Shams Business Center, Sharjah Media City Free Zone, Al Messaned, Sharjah, UAE.`,

        items: [
            { type: 'phone', value: '+971585869003', link: 'tel:+971585869003' },
            { type: 'email', value: 'sales@loomfreight.com', link: 'mailto:sales@loomfreight.com' },
            { type: 'time', value: 'Mon - Fri 08:00 - 17:00' },
            { type: 'time', value: 'Sat 08:00 - 13:00', fullWidth: true },
        ],
    },
};