import self from "../img/self.png"
import mock1 from "../img/Website.png"
import mock2 from "../img/zemen-128x128.png"
import mock3 from "../img/Zemen-Insurance.png"
import mock4 from "../img/10-profile-picture-ideas-to-make-you-stand-out.png"
// import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Mekbib",
    lastName: "Zewde",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Ethiopia'
        },
        {
            emoji: "💼",
            text: "Etech S.C"
        },
        {
            emoji: "📧",
            text: "Mekbib35@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://www.instagram.com/mekbib_z/profilecard/?igsh=MWJsZTc2NjQ4ZzIzdA==",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Mek3588",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mekbib-zewde-a4856225a/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/mekbib35?t=r5Jk-XQKzwzue_kXk6-7PA&s=09",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I am a passionate Full Stack Developer with expertise in building scalable, dynamic, and user-friendly web applications. With a strong foundation in both front-end and back-end development, I thrive on transforming ideas into functional, high-performance solutions.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'tailwind'],
            exposedTo: ['nodejs', 'express', 'mysql','postgress']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Ethiopost CRM",
            description: "A comprehensive CRM system designed for Ethiopost, focusing on customer management and workflow optimization.",
            image: mock1 // Replace with the actual image path
        },
        {
            title: "Zemen CRM",
            description: "An advanced CRM platform tailored for Zemen, featuring lead management and sales tracking tools.",
            image: mock2 // Replace with the actual image path
        },
        {
            title: "Zemen Insurance System",
            description: "An insurance management system for Zemen, providing seamless policy management and customer service.",
            image: mock3 // Replace with the actual image path
        },
        {
            title: "Portfolio",
            description: "My personal portfolio showcasing various projects and technical skills.",
            image: mock4 // Replace with the actual image path
        }
    ]
    
}