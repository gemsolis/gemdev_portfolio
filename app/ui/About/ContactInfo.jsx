import Link from "next/link";
import { socialLinks } from "@/app/data/constant";
import { MdOutlineEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="glass-bg flex justify-between px-5 py-3 max-sm:flex-col">
      <div className="flex items-center gap-2 ">
        <span>
          <MdOutlineEmail size={20} />
        </span>
        <p>gemsolis.dev@gmail.com</p>
      </div>
      <div className="glass-bg z-[100px] flex gap-2 p-3">
        {socialLinks.map((link) => (
          <ul className="">
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
    </div>
  );
};

export default ContactInfo;
