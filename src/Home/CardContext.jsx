import React, { createContext } from 'react';

const CardContext = createContext();

const CardProvider = ({ children }) => {

  const cards = [
    { image: '../testimonialimg/storyslide1.webp', description: 'LetsFAME App has been instrumental in amplifying my reach and establishing my presence in the industry. I am grateful for the support and connections I got through LetsFAME to fuel my cinematic journey.', name: 'Eswaramoorthy', designation: 'Film Editor', country: 'India' },
    { image: '../testimonialimg/storyslide2.webp', description: "LetsFAME app has been my go-to platform, offering avenues to showcase my talents in acting, dancing, and even direction. It's where my journey as a versatile artist began, as seen through my portfolio of photos and the project 'Mama Margaya, where I had the privilege to act.", name: 'Aradhana', designation: 'Actor', country: 'India' },
    { image: '../testimonialimg/storyslide3.webp', description: "When I stumbled upon LetsFAME, I found a community of like-minded individuals and industry professionals who shared my passion. LetsFAME Job Calls became my go-to for assembling the perfect team for my projects, while networking on the platform led to valuable relationships and opportunities.", name: 'Suresh Krishna', designation: 'Dirctor', country: 'India' },
    { image: '../testimonialimg/storyslide4.webp', description: "LetsFAME has truly changed the game for me as an executive producer. It's not just a platform; it's a community where I've connected with incredible talents and built real relationships. l've been able to find and hire truly talented individuals who share my passion for filmmaking.", name: 'JayaSuriya', designation: 'Executive Producer', country: 'India' },
    { image: '../testimonialimg/storyslide5.webp', description: "LetsFAME has opened up so many opportunities for me. Thanks to this platform, I've connected with influential people and landed roles I never thought possible. I genuinely feel that because of LetsFAME, I'm on my way to becoming a prominent figure in the film industry.", name: 'Sophia', designation: 'Actress', country: 'India' },
    { image: '../testimonialimg/storyslide6.webp', description: "Thanks to LetsFAME, I recently landed a role in AR Murugadoss’ SK23, a milestone in my career. I am truly grateful for the support and network that LetsFAME has provided, helping me reach new heights in my acting journey!", name: 'Mani Maran', designation: 'Actor', country: 'India' },
    { image: '../testimonialimg/storyslide7.webp', description: "I want to extend my gratitude to LetsFAME for revolutionizing my career. As a writer, actor, director and dubbing artist, the platform has connected me with invaluable opportunities and a supportive community. Thank you LetsFAME!", name: 'Kapil Anandh', designation: 'Film Maker', country: 'India' },
    { image: '../testimonialimg/storyslide8.webp', description: "I owe my recent success to LetsFAME. This platform has been instrumental in connecting me with talented professionals and collaborators in the film industry. The supportive community and robust networking capabilities of LetsFAME have significantly advanced my career.", name: 'Srinath', designation: 'Film Maker', country: 'India' },
    { image: '../testimonialimg/storyslide9.webp', description: "LetsFAME serves as my platform to showcase my skills in sound direction and lyrical prowess. It's where creativity knows no bounds and dreams take flight. Very grateful for the opportunities LetsFAME has provided and excited to continue working with genuine talents who inspire and elevate every project.", name: 'Venu Chander', designation: 'Sound Engineer', country: 'India' },
  ];
  const blogcards1 = [{
    image: "../testimonialimg/Film Location Scoutingblog.png",
    title: "Film Location Scouting: How to Find the Perfect Location For Movies"
  }, {
    image: "../testimonialimg/Howt FindthePerfectblog.png",
    title: "How to Find the Perfect Actors for Your Film"
  }, {
    image: "../testimonialimg/HowtoBreakintoFilmEditingblog.png",
    title: "How to Break into Film Editing: Tips for Aspiring Editors"
  }, {
    image: "../testimonialimg/How-to-create-the-perfectblog.png",
    title: "How to create the perfect self-tape audition at home"
  },{
    image: "../testimonialimg/blog30.png",
    title: "World of Props! How Everyday Objects Transform a Scene?"
  },
  {
    image: "../testimonialimg/all-things-cannesblog.png",
    title: "All Things Cannes 2024"
  },
  {
    image: "../testimonialimg/blog25.jpg",
    title: "Letsfame Ultimate Platform for Authentic Film Industry Networking and Hiring"
  },
  {
    image: "../testimonialimg/top-10-mistakesblog.png",
    title: "Top 15 Mistakes One Should Avoid in Film Auditions"
  },
  {
    image: "../testimonialimg/biopics-of-all-time.png",
    title: "The 15 Best Biopics of All Time"
  },
  {
    image:"../testimonialimg/Met-Gala-2024.png",
    title: "TMet Gala 2024! Celebrities, Couture and Surprises"
  },
  {
    image:"../testimonialimg/Film Narratives.png",
    title: "Angles! How do Camera Perspectives Influence Film Narratives?"
  },
  {
    image:"../testimonialimg/Depiction of Unlovable.png",
    title:"Depiction of Unlovable: How Filmmakers Use Psychology to Soften the Sinister?"
  }
]
  return (
    <CardContext.Provider value={{ cards, blogcards1}}>
      {children}
    </CardContext.Provider>
  ); 
};

export { CardContext, CardProvider };
 