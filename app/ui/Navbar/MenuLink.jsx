import Link from "next/link";

const MenuLink = ({ item }) => {
  return (
    <Link
      href={item.path}
      className="my-1 flex flex-col items-center justify-center px-2 py-3 text-black  dark:text-white "
    >
      <span>{item.icon}</span>
      <span className="text-sm ">{item.title}</span>
    </Link>
  );
};

export default MenuLink;
