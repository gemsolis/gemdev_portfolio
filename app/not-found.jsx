import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center">
      <Image
        src="/assets/404.png"
        width={400}
        height={400}
        alt="404"
        className="m-10"
      />
      <p className="my-2 text-lg">Ooops! Page not found!</p>
      <p className="my-2">
        Go back to{" "}
        <Link href="/" className="text-underline text-blue-500">
          Homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
