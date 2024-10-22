import desktopService from '../../../Images/Icons/desktop-dev.png';
import webService from '../../../Images/Icons/web-dev.png';
import mobileService from '../../../Images/Icons/mobile-dev.png';

const ServicesData = [

    {
        _id: '1sd',
        icon: desktopService,
        title: 'Desktop Applications',
        description: `
            A desktop app designed to enhance productivity with seamless task management, 
            real-time collaboration, and intuitive user interface.
        `,
    },

    {
        _id: '2sd',
        icon: webService,
        title: 'Websites & Dashboards',
        description: `
            Professional website development services focused on creating responsive, 
            user-friendly, and visually appealing sites to boost online presence
        `,
    },

    {
        _id: '3sd',
        icon: mobileService,
        title: 'Mobile Applications',
        description: `
            Expert mobile app development delivering high-performance, 
            user-centric apps for iOS and Android, tailored to meet business needs.
        `,
    },

];

export default ServicesData;