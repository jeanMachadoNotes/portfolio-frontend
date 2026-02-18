const projects = [
    {
        name: "Portfolio Website",
        description: "Personal portfolio built with React and FastAPI",
        tech: ["React", "FastAPI"],
        featured: false
    },
    {
        name:"Flick Facts - Movie Search",
        description: "Find movie information fast with this film search tool",
        tech: ["React", "Axios", "REST APIs"],
        featured: true
    },
    {
        name:"Brazilian Jiu-Jitsu Knowledge Assistant",
        description: "A web-based assistant that answers Brazilian Jiu-Jitsu questions using retrieval-augmented generation (RAG).",
        details: "Allows users to ask technique and training questions and receive grounded repsonses based on curated BJJ knowledge source.",
        tech: ["React","FastAPI","OpenAI Embeddings","Cosine Similarity","Rate Limiting"],
        live: "https://rag-bjj-assistant.vercel.app",
        github: "https://github.com/jeanMachadoNotes/rag-bjj-assistant",
        featured: true
    },
    {
        name:"Other Project",
        description: "Smaller, experimental project.",
        tech: ["Javascript"],
        featured: false
    }   
];

export default projects;