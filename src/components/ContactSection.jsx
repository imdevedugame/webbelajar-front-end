import ProfilePic from "../assets/hero-img.jpg";
import ContactItems from "../components/ContactItems";

const contactData = [
    {
        id: 1,
        icon: "github",
        link: "https://github.com/jhondoe",
        label: "GitHub",
        username: "@jhondoe",
    },
    {
        id: 2,
        icon: "linkedin",
        link: "https://linkedin.com/in/jhondoe",
        label: "LinkedIn",
        username: "@jhondoe",
    },
    {
        id: 3,
        icon: "twitter",
        link: "https://twitter.com/jhondoe",
        label: "Twitter",
        username: "@jhondoe",
    },
    {
        id: 4,
        icon: "envelope",
        link: "mailto:jhondoe@example.com",
        label: "Email",
        username: "jhondoe@example.com",
    },
];

export default function ContactSection() {
    return (
        <section className="font-serif py-20 px-4 sm:px-6 lg:px-8 text-gray-800">
            {/* Title */}
            <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold">Contact Me</h1>
                <p className="text-base sm:text-lg mt-2">
                You can find me on various platforms. Let's connect!
                </p>
            </div>

            {/* Profile Picture */}
            <div className="mt-8 flex justify-center">
                <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden shadow-lg">
                <img src={ProfilePic} alt="Your Name" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 max-w-3xl mx-auto">
                <ul className="space-y-6 sm:space-y-8">
                {contactData.map((contact) => (
                    <ContactItems
                    key={contact.id}
                    icon={contact.icon}
                    link={contact.link}
                    label={contact.label}
                    username={contact.username}
                    />
                ))}
                </ul>
            </div>

            {/* Info */}
            <div className="text-center mt-12 sm:mt-16">
                <p className="text-base sm:text-lg">
                I am always open to collaborations or just a friendly chat. Feel free to
                reach out anytime!
                </p>
            </div>
        </section>
    )
}