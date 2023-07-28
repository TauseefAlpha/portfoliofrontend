
import netflix from "../assets/portfolio/netflix.png"
import gamedev from "../assets/portfolio/gamedev.png"
import movie from "../assets/portfolio/TA.png"
import resturant from "../assets/portfolio/resturant2.png"
import clock from "../assets/portfolio/clock.png"
import Cartmanagement from "../assets/portfolio/cartmanagement.png"
import TAWAatcStore from "../assets/portfolio/oderdetail.png"

export const projects = [
    {
        id: 1,
        title: 'Netflix  clone',
        detail: "The technological revolution is changing aspect of our lives,. it's also changing the way we learn and what we learn.Factual knowledge is less prized when everything you ever need to know can be found on your phone Theres no imperative to be an expert at doing everything when you can.",
        image: netflix,
        demo: "https://netflix-psi-seven.vercel.app/",
        code: 'https://github.com/TauseefAlpha/netflixApp'
    },
    {
        id: 2,
        title: 'TA GameDEV',
        detail: "complete frontend website using Html, CSS ,javaScript,fully responsive for desktop,tab,mobile, convert figma design to website design card, mediaquries  ",
        image: gamedev,
        demo: "https://gamedev-tau.vercel.app/",
        code: 'https://github.com/TauseefAlpha/Gamedev'
    },
    {
        id: 3,
        title: 'TA movix',
        detail: "Use React and React Router Dom navigation.Implement an attractive design for a great user experience.Utilize Redux Toolkitfor global state management and a well-organizedapplication structure.Create custom hooks for reusable logic and cleaner code.Implement lazy loading for images to improve page loading performance.infinite scroll to automatically load more movies as the user scrolls down.TMDB API Integration: Integrate the TMDB API for seamless movie data retrieval.Movie Detail Page.Search Filter",
        image: movie,
        demo: "https://ta-moviexweb.vercel.app",
        code: 'https://github.com/TauseefAlpha/TA-moviexweb'
    },

    {
        id: 4,
        title: 'CartMAnagment',
        detail: "The technological revolution is changing aspect of our lives use third party dummy api cartmanagement through usecart library ,bootstrap, pagination ,cards, carousel. attractive user design for good user experience,transition.",
        image: Cartmanagement,
        demo: "https://store-cartmanagement.vercel.app/",
        code: 'https://github.com/TauseefAlpha/store-cartmanagement'
    },
    {
        id: 5,
        title: 'Resturant Hub',
        detail: "Create responsive layout Use Saas, react typescript, react Material ui ,react router dom ,navigation,home about,contact menu,gallary pages  react materialui bootstrap, pagination and cards. attractive layout design for good user experience.",
        image: resturant,
        demo: "https://restruantweb.vercel.app/",
        code: 'https://github.com/TauseefAlpha/restruantweb'
    },

    {
        id: 6,
        title: 'wall Clock',
        detail: "complete frontend website using Html, CSS ,javaScript  and transition and hide show functionality",
        image: clock,
        demo: "https://clock-dial.netlify.app/",
        code: 'https://github.com/TauseefAlpha/clock'
    },

    {
        id: 7,
        title: 'Estore CartMAnagment',
        detail: "A MERN stack project using React for the front end.Implement a responsive navbar and carousel for a better user experience.Display products on the homepage using cards with transition effects.Implement pagination for better navigation through product listings.Allow users to click on a product card to view its detail page.Product Detail Page show detail about the productCart Management system to add, remove, and update oderAuthentication and Registration Implement user authentication using JWTfor secure login and signup process.Set up a backend using Node.js and Express for handling API requests.Use Bcrypt for password hashing and user authentication.Validate inputs on the backend using middlewareCloudinary: Utilize Cloudinary to store and manage product imagesMongoDB: Store user, order, and shipping address data in a database.State Management Use the Context API and reducer hook for global statemanagement RestfulApiProvide an order history section for users to check their past orders",
        image: TAWAatcStore,
        demo: "https://github.com/TauseefAlpha/eshoppingwatchstore",
        code: 'https://github.com/TauseefAlpha/eshoppingwatchstore'
    },
]