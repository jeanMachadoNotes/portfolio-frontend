import bjjImage from "../assets/projects/bjj-assistant.jpeg";
import fastFlixImage from "../assets/projects/fast-flix.jpeg";
import elitePrecisionImage from "../assets/projects/elite-precision-moves.jpeg";

const projects = [
     {
        name:"Brazilian Jiu-Jitsu Knowledge Assistant",
        description: "An agent-orchestrated Retrieval-Augmented Generation (RAG) system for Brazilian Jiu-Jitsu.",
        details: "Users can ask technique and training questions. A LangChain tool-calling agent dynamically queries a Chroma vector database and generates strictly grounded responses from curated BJJ source material.",
        tech: ["React","FastAPI","LangChain Agents","ChromaDB","OpenAI Embeddings","Rate Limiting"],
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