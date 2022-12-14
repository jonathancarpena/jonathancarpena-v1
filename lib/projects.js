
// 1. Garments
// 2. Pokemon Guesser
// 3. Jolina Lashes
// 4. Meal Prep
// 5. Reddit Analyzer
// 6. MyFoodSpace


const Projects = [
    // Personal Site
    {
        id: 1,
        complete: true,
        title: 'Personal Site',
        overview: 'First iteration of my personal website built with Next.js',
        description: 'The first iteration of my personal website. The website is built with Next.js, styled with TailwindCSS, animated with Framer Motion, and hosted through Netlify.',
        tools: ['nextjs', 'tailwindcss', 'netlify', 'framer'],
        github: 'https://github.com/jonathancarpena/personal-site-v1',
        externalLink: 'https://jonathancarpena.me/',
        demo: null,
        preview: '/projects/personal-site-v1/screenshots/preview.PNG',
        "preview-dark": '/projects/personal-site-v1/screenshots/preview-dark.PNG',
        screenshots: [
            '/projects/personal-site-v1/screenshots/landing-dark.PNG',
            '/projects/personal-site-v1/screenshots/landing.PNG',
            '/projects/personal-site-v1/screenshots/about-dark.PNG',
            '/projects/personal-site-v1/screenshots/about.PNG',
            '/projects/personal-site-v1/screenshots/work-dark.PNG',
            '/projects/personal-site-v1/screenshots/work.PNG',
            '/projects/personal-site-v1/screenshots/mobile-landing-dark.PNG',
            '/projects/personal-site-v1/screenshots/mobile-about-dark.PNG',
            '/projects/personal-site-v1/screenshots/mobile-menu.PNG',
        ],
        purpose: [
            "To showcase my skillset and my latest work whilst having an aesthetic user interface.",
        ],
        features: [
            "Dark Mode Theme",
            "Animated Components",
            "Netlify Forms",
            "Responsive Web Design"
        ],
    },

    // Nathan's Meal Prep
    {
        id: 2,
        complete: true,
        title: "Nathan's Meal Prep",
        overview: "A client's web application that displays their meal prep business.",
        description: "A client's web application that displays their meal prep business. The goal was to provide the client an application that'll allow them to display their meals as well as provide them a system that allows them to freely create, modify, and delete content (E.g. meals, orders, & availability)",
        tools: [
            'react', 'redux', 'tailwindcss', 'netlify',
            'mongodb', 'express', 'nodejs', 'heroku', 'firebase'
        ],
        github: 'https://github.com/jonathancarpena/nathans-meal-prep',
        externalLink: 'https://nathansmealprep.netlify.app/',
        demo: null,
        preview: '/projects/nathans-mealprep/screenshots/preview.PNG',
        "preview-dark": null,
        screenshots: [
            '/projects/nathans-mealprep/screenshots/landing.PNG',
            '/projects/nathans-mealprep/screenshots/meals.PNG',
            '/projects/nathans-mealprep/screenshots/single-meal.PNG',
            '/projects/nathans-mealprep/screenshots/admin-meals.PNG',
            '/projects/nathans-mealprep/screenshots/admin-orders.PNG',
            '/projects/nathans-mealprep/screenshots/mobile-landing.PNG',
            '/projects/nathans-mealprep/screenshots/mobile-meals.PNG',
            '/projects/nathans-mealprep/screenshots/mobile-single-meal.PNG',
        ],

        features: [
            "RESTful APIs",
            "Authentication",
            "Content Management System for Admin",
            "Add to Bag",
            "Customer Ordering",
            "Responsive Web Design",
            "Emailjs Integration"
        ],
    },

    // Jolina Lashes
    {
        id: 3,
        complete: true,
        title: 'Jolina Lashes',
        overview: "A client's web application that showcases their lash artist business.",
        description: "A client's web application that showcases their lash artist business. The goal of the project was to create a web application that implements a booking system, a content management system, and a user-interface that reflects the personality of the client/brand.",
        tools: [
            'react', 'redux', 'tailwindcss', 'netlify',
            'mongodb', 'express', 'nodejs', 'heroku', 'firebase'
        ],
        github: 'https://github.com/jonathancarpena/jolina-lashes',
        externalLink: 'https://jolinalashes.netlify.app/',
        demo: null,
        preview: '/projects/jolina-lashes/screenshots/preview.PNG',
        "preview-dark": null,
        screenshots: [
            '/projects/jolina-lashes/screenshots/landing.PNG',
            '/projects/jolina-lashes/screenshots/services.PNG',
            '/projects/jolina-lashes/screenshots/single-service.PNG',
            '/projects/jolina-lashes/screenshots/booking-page.PNG',
            '/projects/jolina-lashes/screenshots/bookings.PNG',
            '/projects/jolina-lashes/screenshots/availability.PNG',
            '/projects/jolina-lashes/screenshots/mobile-landing.PNG',
            '/projects/jolina-lashes/screenshots/mobile-services.PNG',
            '/projects/jolina-lashes/screenshots/mobile-single-service.PNG',
            '/projects/jolina-lashes/screenshots/mobile-booking-page.PNG',
        ],
        features: [
            "RESTful APIs",
            "Authentication",
            "Content Management System for Admin",
            "Customer Booking System",
            "Responsive Web Design",
            "Emailjs Integration"
        ],
    },

    // Pokemon Guesser
    {
        id: 4,
        complete: true,
        title: 'Pokemon Guesser',
        overview: "A web app guessing game that uses various Pokemon's silhouette and/or cry.",
        description: "A web app guessing game that uses various Pokemon's silhouette and/or cry. The goal of this project was to build upon a previous project that was created for a hackathon and polish it with more features and animation.",
        tools: [
            'react', 'tailwindcss', 'netlify',
            'mongodb', 'express', 'nodejs', 'heroku', 'framer'
        ],
        github: 'https://github.com/jonathancarpena/pokemon-guesser',
        externalLink: 'https://pokemon-guesser-game.netlify.app/',
        demo: {
            link: 'https://youtu.be/8iLuK4VtANo',
            timeStamps: [
                {
                    start: '0:00',
                    end: '0:32',
                    title: 'Landing Screen'
                },
                {
                    start: '0:33',
                    end: '0:54',
                    title: 'Loading Screen'
                },
                {
                    start: '0:55',
                    end: '1:07',
                    title: 'Choose Difficulty'
                },
                {
                    start: '1:08',
                    end: '2:02',
                    title: 'Instructions, Gameplay'
                },
                {
                    start: '2:03',
                    end: '2:31',
                    title: 'Complete, New High Score'
                },
                {
                    start: '2:32',
                    end: '2:52',
                    title: 'Ranking'
                },
                {
                    start: '2:53',
                    end: '3:12',
                    title: 'Give Up'
                },

            ]

        },
        preview: '/projects/pokemon-guesser/screenshots/preview.PNG',
        "preview-dark": null,
        screenshots: [
            '/projects/pokemon-guesser/screenshots/landing.PNG',
            '/projects/pokemon-guesser/screenshots/loading.PNG',
            '/projects/pokemon-guesser/screenshots/difficulty.PNG',
            '/projects/pokemon-guesser/screenshots/game.PNG',
            '/projects/pokemon-guesser/screenshots/ranking.PNG'
        ],
        features: [
            "RESTful APIs",
            "5 Game difficulty options.",
            "Features Pokemon Generations 1-8.",
            "High Score Table for each Pokemon generation and different levels.",
            "Desktop Only."
        ],

    },

    // Reddit Analyzer
    {
        id: 5,
        complete: true,
        title: 'Reddit Analyzer',
        overview: "A web app data visualizing tool used to view Reddit User's data and Subreddit traffic activity.",
        description: "A web app data visualizing tool used for Reddit User's data and Subreddit traffic activity using the Reddit API. The goal of the project was to create a tool that helps Reddit users visualize their past activity on the platform. Also to identify the best optimal time of the week to post on a Subreddit based on it's past activity.",
        tools: [
            'nextjs', 'tailwindcss', 'netlify',
        ],
        github: 'https://github.com/jonathancarpena/reddit-analyzer',
        externalLink: 'https://reddit-analyzer.netlify.app/',
        demo: {
            link: 'https://youtu.be/cV1_Eb4g4pw',
            timeStamps: [
                {
                    start: '0:00',
                    end: '0:08',
                    title: 'Landing Page, Dark Mode Toggle'
                },
                {
                    start: '0:09',
                    end: '2:06',
                    title: 'Username Analysis'
                },
                {
                    start: '2:07',
                    end: '2:56',
                    title: 'Dark Mode: Username Analysis'
                },
                {
                    start: '2:57',
                    end: '3:46',
                    title: 'Mobile Responsive - Tablet'
                },
                {
                    start: '3:47',
                    end: '4:38',
                    title: 'Mobile Responsive - Phone'
                },
                {
                    start: '4:39',
                    end: '5:18',
                    title: 'Subreddit Analysis'
                },
                {
                    start: '5:19',
                    end: '5:33',
                    title: 'Dark Mode: Subreddit Analysis'
                },
                {
                    start: '5:34',
                    end: '5:51',
                    title: 'Mobile Responsive - Tablet'
                },
                {
                    start: '5:52',
                    end: '6:01',
                    title: 'Mobile Responsive - Phone'
                },
            ]

        },
        preview: '/projects/reddit-analyzer/screenshots/preview.PNG',
        "preview-dark": '/projects/reddit-analyzer/screenshots/preview-dark.PNG',
        screenshots: [
            '/projects/reddit-analyzer/screenshots/user-light.PNG',
            '/projects/reddit-analyzer/screenshots/user-dark.PNG',
            '/projects/reddit-analyzer/screenshots/charts-light.PNG',
            '/projects/reddit-analyzer/screenshots/charts-dark.PNG',
            '/projects/reddit-analyzer/screenshots/subreddit-light.PNG',
            '/projects/reddit-analyzer/screenshots/subreddit-dark.PNG',
            '/projects/reddit-analyzer/screenshots/mobile-user-light.PNG',
            '/projects/reddit-analyzer/screenshots/mobile-user-dark.PNG',
            '/projects/reddit-analyzer/screenshots/mobile-subreddit-light.PNG',
            '/projects/reddit-analyzer/screenshots/mobile-subreddit-dark.PNG',

        ],

        features: [
            "Reddit user data visualization on ReCharts",
            "Analysis of Subreddit activity over time",
            "Generate optimal subreddit posting time",
            "Responsive Web Design",
            "Dark Mode Theme",
        ],
    },

    // Food Space
    {
        id: 6,
        complete: true,
        title: 'FoodSpace',
        overview: 'A web app that tracks, manages, and organizes the food in your household',
        description: 'A web app that tracks, manages, and organizes the food in your household the goal of the project was to solve the problem of having to remember if items are the in your house or if they have expired. By using this app, it will not only notify if you have a certain product in your house, but also let you know when something has expired.',
        tools: [
            'react', 'redux', 'tailwindcss',
            'mongodb', 'express', 'nodejs',
        ],
        github: 'https://github.com/jonathancarpena/foodspace',
        externalLink: null,
        demo: {
            link: 'https://youtu.be/4HDr8Y_a3h4',
            timeStamps: [
                {
                    start: '0:00',
                    end: '0:53',
                    title: 'Landing Page'
                },
                {
                    start: '0:54',
                    end: '1:50',
                    title: 'Sign Up'
                },
                {
                    start: '1:51',
                    end: '2:44',
                    title: 'Create FoodSpace'
                },
                {
                    start: '2:45',
                    end: '4:50',
                    title: 'Adding Items to FoodSpace'
                },
                {
                    start: '4:51',
                    end: '6:08',
                    title: 'Invite User, Adding an Owner for an Item'
                },
                {
                    start: '6:09',
                    end: '7:04',
                    title: 'Expired Item, Deleting Item'
                },
                {
                    start: '7:05',
                    end: '8:24',
                    title: 'Product Search, Create Product'
                },
                {
                    start: '8:25',
                    end: '8:59',
                    title: 'Updating Product the User Created'
                },
            ]
        },
        preview: '/projects/foodspace/screenshots/preview.PNG',
        "preview-dark": null,
        screenshots: [
            '/projects/foodspace/screenshots/mobile-landing.PNG',
            '/projects/foodspace/screenshots/mobile-foodspace.PNG',
            '/projects/foodspace/screenshots/mobile-user-dashboard.PNG',
        ],
        features: [
            "RESTful APIs",
            "User Authentication",
            "Content Management",
            "Mobile Design",
        ],

    },

]

export default Projects