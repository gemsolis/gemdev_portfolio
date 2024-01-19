import Link from "next/link";
import { socialLinks } from "@/app/data/constant";
import { MdOutlineEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="glass-bg flex justify-between px-5 py-3 max-sm:flex-col max-sm:justify-center max-sm:items-center gap-2">
      <div className="flex items-center gap-2 ">
        <span>
          <MdOutlineEmail size={20} />
        </span>
        <p>gemsolis.dev@gmail.com</p>
      </div>
      <div>
        <ul className="glass-bg flex gap-2 p-3 rounded-md">
        {socialLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.url}
                className="duration-300 hover:scale-[1.2] hover:text-orange-500"
              >
                <span>{link.icon}</span>
              </Link>
            </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
