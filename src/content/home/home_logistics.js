// home2_content.js

export const home2_content = {
    hero: {
        badge: '10 K+ Active Clients across the Globe',

        loading: {
            line1: 'Integrated Logistics &',
            line2: 'Supply Chain Solutions',
        },

        loaded: {
            line1: 'Integrated Logistics &',
            line2: 'Supply Chain Solutions',
        },

        cta: 'Get a Free Quote',
    },

    logistics: {
        badge: 'Logistics',

        title: 'Freight Solutions Built to Deliver',

        // Structured description with highlighted italic words for rich rendering
        description: {
            parts: [
                { text: 'From ', highlight: false },
                { text: 'Ports', highlight: true },
                { text: ' to ', highlight: false },
                { text: 'Highways', highlight: true },
                { text: ' to ', highlight: false },
                { text: 'Airways', highlight: true },
                {
                    text: ', our logistics services ensure reliable cargo movement across every transport channel.',
                    highlight: false,
                },
            ],
        },

        cards: [
            {
                title: 'Sea Freight',
                imageKey: 'seafreight',
                description: 'Reliable global shipping through major sea routes.',
                route: '/sea-freight',
                spotlightColor: 'rgba(255, 255, 255, 0.25)',
            },
            {
                title: 'Land Transport',
                imageKey: 'landtransport',
                description: 'Reliable ground transportation for your cargo.',
                route: '/land-transport',
                spotlightColor: 'rgba(255, 255, 255, 0.25)',
            },
            {
                title: 'Air Transport',
                imageKey: 'airtransport',
                description: 'Air cargo solutions for time-sensitive shipments.',
                route: '/air-transport',
                spotlightColor: 'rgba(255, 255, 255, 0.25)',
            },
        ],
    },
};