import Link from "next/link";
import { socialLinks } from "@/app/data/constant";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const ContactsCard = () => {
  return (
    <div className="w-full">
      <h3>
        Feel free to communicate with me.
      </h3>
      <div className="custom-flex mt-3 items-center justify-between rounded-md dark-gradient py-4 text-white shadow-md max-md:flex-col">
        <div className="mx-5 mb-2 flex items-center gap-3">
          <span>
            <MdOutlineEmail size={20} />
          </span>
          <span className="text-[20px] max-sm:text-[14px]">
            gemsolis.dev@gmail.com
          </span>
        </div>
        <div className="] mx-5 mb-2 flex items-center gap-3">
          <span>
            <IoCall size={20} />
          </span>
          <span className="text-[20px] max-sm:text-[14px]">+639199314510</span>
        </div>
      </div>
      {socialLinks.map((link) => (
        <div
          key={link.title}
          className="mx-5 mt-10 flex justify-between border-b-2 border-orange-500 py-2"
        >
          <span className="text-lg uppercase">{link.title}</span>
          <Link href={link.url} target="_blank">
            {link.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContactsCard;
