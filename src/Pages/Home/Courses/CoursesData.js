import frontend from '../../../Images/front-end-course.jpg';
import flutter from '../../../Images/mobile-app-course.jpg';
import desktop from '../../../Images/desktop-app-course.webp';
import backendDotNet from '../../../Images/backend-end-dotnet-course.jpg';
import backendLaravel from '../../../Images/backend-end-laravel-course.jpg';

const CoursesData = [

    {
        _id: '1cd',
        title: 'Front-End Development(React.js)',
        image: frontend,
        description: `
            Learn front-end development starting from HTML, CSS, and JavaScript, 
            then progress to React, covering components, state, props, hooks, 
            and routing to build web applications.
        `,
        instructor: 'March James',
        link: '/',
    },

    {
        _id: '2cd',
        title: 'Back-End Development(ASP.NET)',
        image: backendDotNet,
        description: `
            Learn back-end development with .NET, focusing on C#, ASP.NET Core, APIs, databases, 
            and authentication for building robust web applications.
        `,
        instructor: 'Khaled Ahmed',
        link: '/',
    },

    {
        _id: '3cd',
        title: 'Back-End Development(Laravel)',
        image: backendLaravel,
        description: `
            Learn back-end development with Laravel, covering routing, controllers, models, migrations, 
            and RESTful APIs to build scalable and secure web applications.
        `,
        instructor: 'Ashraf Said',
        link: '/',
    },

    {
        _id: '4cd',
        title: 'Mobile-App Development(Flutter)',
        image: flutter,
        description: `
            Learn Flutter for building natively compiled applications across mobile, web, 
            and desktop from a single codebase, focusing on widgets, state management, and UI design.
        `,
        instructor: 'Michel Darien',
        link: '/',
    },

    {
        _id: '5cd',
        title: 'Desktop-App Development',
        image: desktop,
        description: `
            Learn desktop app development using Java, covering topics like Swing, JavaFX, 
            and database connectivity to build user-friendly, scalable, and cross-platform applications.
        `,
        instructor: 'Mohamed Emad',
        link: '/',
    },

];

export default CoursesData;