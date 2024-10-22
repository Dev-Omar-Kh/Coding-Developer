import desktopImg from '../../../Images/Icons/desktop-dev.png';
import mobileImg from '../../../Images/Icons/mobile-dev.png';
import tabletImg from '../../../Images/Icons/responsive-dev.png';

const FakeMainData = [

    {
        _id: '1md',
        title: 'Websites & Desktop Apps Development',
        description: `
            Websites and desktop apps development involves designing and building user-friendly interfaces and functional applications. 
            By leveraging modern technologies and frameworks, developers create seamless experiences that meet user needs, 
            enhance performance, and ensure compatibility across various platforms, 
            ultimately leading to improved user engagement and satisfaction.
        `,
        image: desktopImg,
        link: '/',
    },

    {
        _id: '2md',
        title: 'Mobile Apps Development',
        description: `
            Mobile apps development involves designing and creating applications for mobile devices, 
            utilizing platforms like iOS and Android. Developers focus on delivering intuitive user experiences, 
            optimizing performance, and ensuring compatibility across various screen sizes and operating systems, 
            ultimately enhancing user engagement and accessibility in a mobile-centric world.
        `,
        image: mobileImg,
        link: '/',
    },

    {
        _id: '3md',
        title: 'Responsive Designs',
        description: `
            Responsive design is an approach to web development that ensures websites adapt 
            seamlessly to various screen sizes and devices.By using flexible grids, layouts, and media queries, 
            responsive design enhances user experience, maintains visual consistency, 
            and optimizes accessibility, enabling content to be easily viewed on desktops, tablets, and smartphones.
        `,
        image: tabletImg,
        link: '/',
    },

];

export default FakeMainData;