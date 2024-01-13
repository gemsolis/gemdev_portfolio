import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-2 bg-gray-800 px-10 py-3 uppercase text-gray-400 max-sm:flex-col ">
      <Link
        href="/"
        className="flex scale-[1.1] items-center text-lg text-black"
      >
        <Image src="/assets/gem-logo.png" alt="logo" width={30} height={30} />
        <span className="px-2 text-white">GEM.DEV</span>
      </Link>
      <p className="text-sm">Developed by Gem Solis.</p>
      <p>2024</p>
    </div>
  );
};

export default Footer;
