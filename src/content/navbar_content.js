export const menuItems = [
  { 
    id: 'aboutus', 
    label: 'About Us', 
    type: 'dropdown', 
    submenu: [
    { 
        id: 'aboutcompany', 
        label: 'About Company', 
        type: 'page'
    },
    { 
        id: 'careers', 
        label: 'Careers', 
        type: 'page'
    }
  ]},
  { 
    id: 'services', 
    label: 'Our Services', 
    type: 'dropdown', 
    submenu: [
    { 
        id: 'general-contracting', 
        label: 'General Contracting', 
        type: 'extended-menu', 
        url: 'https://www.google.com/general-contracting',
        extendedMenu: [
          { 
            id: 'infrastructure', 
            label: 'Infrastructure', 
            type: 'page',
            url: 'https://www.google.com/infrastructure'
          },
          { 
            id: 'petrochemical', 
            label: 'Petrochemical', 
            type: 'page',
            url: 'https://www.google.com/petrochemical'
          },
        ]
    },
    { 
        id: 'logistics', 
        label: 'Logistics', 
        type: 'extended-menu',
        url: 'https://www.google.com/logistics',
        extendedMenu: [
          { 
            id: 'land-freight',
            label: 'Land Freight',
            type: 'page',
            url: 'https://www.google.com/land-freight'
          },
          {
            id: 'air-freight',
            label: 'Air Freight',
            type: 'page',
            url: 'https://www.google.com/air-freight'
          },
          {
            id: 'sea-freight',
            label: 'Sea Freight',
            type: 'page',
            url: 'https://www.google.com/sea-freight'
          },
          {
            id: 'open-yard-storage',
            label: 'Open Yard Storage',
            type: 'page',
            url: 'https://www.google.com/open-yard-storage'
          }
        ]

    },
    { 
        id: 'marine-transport',
        label: 'Marine Transport',
        type: 'extended-menu', 
        url: 'https://www.google.com/marine-transport',
        extendedMenu: [
          { 
            id: 'ship-management',
            label: 'Ship Management',
            type: 'page',
            url: 'https://www.google.com/ship-management'
          },
          {
            id: 'commercial-management',
            label: 'Commercial Management',
            type: 'page',
            url: 'https://www.google.com/commercial-management'
          },
          {
            id: 'docking-management',
            label: 'Docking Management',
            type: 'page',
            url: 'https://www.google.com/docking-management'
          },
          {
            id: 'crew-management-services',
            label: 'Crew Management Services',
            type: 'page',
            url: 'https://www.google.com/crew-management-services'
          },
          {
            id: 'procurement-purchaser',
            label: 'Procurement & Purchaser Services',
            type: 'page',
            url: 'https://www.google.com/procurement-purchaser-services'
          },
          {
            id:'our-fleets',
            label: 'Our Fleets',
            type: 'page',
            url: 'https://www.google.com/our-fleets'
          }
        ]

    },
    { 
        id: 'material-supply', 
        label: 'Material Supply', 
        type: 'page', 
        url: 'https://www.google.com/material-supply'
    },
    { id: 'equipment-rental', 
        label: 'Equipment Rental', 
        type: 'page', 
        url: 'https://www.google.com/equipment-rental'
    },
    { id: 'custom-clearance-services', 
        label: 'Custom Clearance Services', 
        type: 'page', 
        url: 'https://www.google.com/custom-clearance-services'
    }
  ]},
  { 
    id: 'portfolio', 
    label: 'Portfolio', 
    type: 'page'
  },
  { 
    id: 'blogs', 
    label: 'Blog', 
    type: 'page'
  },
  { 
    id: 'contact', 
    label: 'Contact Us', 
    type: 'page'
  }
]