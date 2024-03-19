import Link from "next/link";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi"; // For Email
import { AiFillGithub } from "react-icons/ai"; // For GitHub

const Socials = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      className="items-center gap-x-5 text-lg"
    >
      <Link href="https://github.com/yourusername">
        <AiFillGithub />
      </Link>
      <Link href="mailto:your.email@example.com" passHref>
        <HiOutlineMail />
      </Link>
      <Link href="https://www.linkedin.com/in/yourprofile">
        <RiLinkedinBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
