import { useState } from "react";


function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("Sending...");

        const response = await fetch("https://my-portfolio-el9i.onrender.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        if (response.ok) {
            setStatus("Message sent!");
            setForm({ name: "", email: "", message: ""});
        } else {
            setStatus("Something went wrong");
        }
    }

    return (
        <section>
            <h2>Contact</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="company"
                    style={{display:"none"}}
                    value={form.company}
                    onChange={handleChange}
                />

                <input 
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={100}
                    required
                />

                <input 
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <textarea 
                    name="message" 
                    placeholder="Tell me a bit about your project, goals, or how I can help..."
                    value={form.message}
                    onChange={handleChange}
                    maxLength={2000}
                    required
                />
                {form.message.length < 10 && (
                    <small className="char-hint">
                        Please include a brief description.
                    </small>
                )}
            
                <small className={
                    form.message.length >= 10 ? "char-success visible" : "char-success"
                }>
                    ✓ Ready to send
                </small>
         

                <button className="button primary">
                    Send Message
                </button>

                {status && <p>{status}</p>}
            </form>
        </section>
    );
}

export default Contact;