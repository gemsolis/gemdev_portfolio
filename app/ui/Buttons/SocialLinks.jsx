import { socialLinks } from "@/app/data/constant";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="glass-bg flex gap-4 rounded-full p-3">
      {socialLinks.map((link) => (
        <ul>
          <li key={link.title}>
            <Link
              href={link.url}
              className="duration-300 hover:scale-[1.2] hover:text-orange-500"
            >
              <span>{link.icon}</span>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SocialLinks;
