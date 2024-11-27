import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const icons = {
  github: <FaGithub className="text-2xl sm:text-3xl text-gray-700" />,
  linkedin: <FaLinkedin className="text-2xl sm:text-3xl text-blue-600" />,
  twitter: <FaTwitter className="text-2xl sm:text-3xl text-blue-500" />,
  envelope: <FaEnvelope className="text-2xl sm:text-3xl text-red-500" />,
};

export default function ContactItems({ icon, link, label, username }) {
  return (
    <li className="flex items-center space-x-4">
      {icons[icon]}
      <a
        href={link}
        className="text-base sm:text-xl font-medium text-gray-800 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}: {username}
      </a>
    </li>
  );
}
