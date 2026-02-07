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
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
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
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <button className="button primary">
                    Send Message
                </button>

                {status && <p>{status}</p>}
            </form>
        </section>
    );
}

export default Contact;