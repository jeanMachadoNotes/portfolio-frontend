import bjjImage from "../assets/projects/bjj-assistant.jpeg";
import fastFlixImage from "../assets/projects/fast-flix.jpeg";
import elitePrecisionImage from "../assets/projects/elite-precision-moves.jpeg";

const projects = [
     {
        name:"Brazilian Jiu-Jitsu Knowledge Assistant",
        description: "A web-based assistant that answers Brazilian Jiu-Jitsu questions using retrieval-augmented generation (RAG).",
        details: "Allows users to ask technique and training questions and receive grounded repsonses based on curated BJJ knowledge source.",
        tech: ["React","FastAPI","OpenAI Embeddings","Cosine Similarity","Rate Limiting"],
        image: bjjImage,
        live: "https://rag-bjj-assistant.vercel.app",
        github: "https://github.com/jeanMachadoNotes/rag-bjj-assistant",
        featured: true
    },
    {
        name: "Elite Precision Moves — Moving Services Website",
        description: "A custom WordPress website built for a professional moving services business.",
        details: "This site provides visitors with clear information about local and long-distance moving services, company values, veteran-led leadership, and an easy way to request quotes or schedule a move.",
        tech: ["Wordpress", "HTML", "CSS", "Responsive Design", "Form Integration"],
        image: elitePrecisionImage,
        live: "http://eliteprecisionmoves.com/",
        featured: true
    },
    {
        name: "Flick Facts - Movie Search App",
        description: "A simple and fast movie browsing app built with React.",
        details: "Fast Flix lets users browse popular movies, search for titles, and view basic movie details. Built with a focus on clean UI, responsiveness, and smooth navigation using real-time API data.",
        tech: ["React", "JavaScript", "API Integration", "CSS", "Responsive Design"],
        image: fastFlixImage,
        live: "https://fast-flix-react-app.vercel.app/",
        github: "https://github.com/jeanMachadoNotes/Fast-Flix-React-App",
        featured: true
    }



    // {
    //     name: "Portfolio Website",
    //     description: "Personal portfolio built with React and FastAPI",
    //     tech: ["React", "FastAPI"],
    //     featured: false
    // },  
];

export default projects;