import { useState } from "react";
import { HEADER_CONTENT } from "../constants";
import Button from "@/components/UI/Buttons/Button";
import { TbX } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { logo, logoLight, buttonSign, buttonLabel } = HEADER_CONTENT;

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const Icon = toggle ? TbX : GiHamburgerMenu;

  return (
    <nav className="fixed top-0 right-0 left-0 z-100 bg-primary md:bg-white/60 md:backdrop-blur-md ">
      <div className="max-w-10xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="md:hidden flex items-center gap-2">
          <Icon
            onClick={toggleMenu}
            className="text-white cursor-pointer text-4xl"
          />
          <Button className="bg-sky px-[17.47px] py-[8.73px]">
            <div className="flex items-center text-sm text-primary">
              <span className="font-700-line-136">{`אזור אישי`}</span>
            </div>
          </Button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button className="min-w-[169px]" variant="outline">
            <div className="flex items-center gap-2 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 3.69736C13.093 3.69736 14.7894 5.39465 14.7894 7.48769C14.7893 9.58065 13.093 11.2771 11 11.2771C8.90703 11.2771 7.21067 9.58066 7.21057 7.48769C7.21057 5.39464 8.90697 3.69736 11 3.69736ZM11 5.36189C9.82586 5.36189 8.8742 6.31355 8.8742 7.48769C8.8743 8.66175 9.82592 9.61349 11 9.61349C12.1741 9.61349 13.1257 8.66175 13.1258 7.48769C13.1258 6.31355 12.1741 5.36189 11 5.36189Z"
                  fill="#28282A"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 0C17.0749 0 22 4.92507 22 11C22 14.3659 20.4857 17.3763 18.1041 19.394C18.0404 19.469 17.9638 19.5322 17.8775 19.5808C15.9936 21.0927 13.6034 22 11 22C8.39631 22 6.00556 21.0929 4.12161 19.5808C4.03539 19.5321 3.95864 19.469 3.89504 19.394C1.51368 17.3763 0 14.3657 0 11C0 4.92507 4.92507 0 11 0ZM10.8917 13.3262C7.97344 13.3264 5.58435 15.587 5.37724 18.4525C6.94125 19.6344 8.88857 20.3355 11 20.3355C13.1112 20.3355 15.0579 19.6341 16.6219 18.4525C16.4147 15.587 14.0265 13.3264 11.1083 13.3262H10.8917ZM11 1.66453C5.84397 1.66453 1.66453 5.84397 1.66453 11C1.66453 13.3232 2.51443 15.4467 3.91851 17.0804C4.70939 13.9663 7.53159 11.6628 10.8917 11.6626H11.1083C14.4683 11.6628 17.2896 13.9664 18.0806 17.0804C19.4849 15.4466 20.3355 13.3234 20.3355 11C20.3355 5.84397 16.156 1.66453 11 1.66453Z"
                  fill="#28282A"
                />
              </svg>
              <span className="font-700-line-136">{buttonSign}</span>
            </div>
          </Button>
          <Button className="min-w-[42.5]">
            <div className="flex items-center gap-2 text-lg">
              <span className="font-700-line-136">{buttonSign}</span>
            </div>
          </Button>
        </div>

        <img
          src={logo}
          alt="unicare-logo"
          className="w-32 sm:w-40 md:w-52 h-auto hidden md:inline"
        />
        <img
          src={logoLight}
          alt="unicare-logo"
          className="w-32 sm:w-40 md:w-52 h-auto inline md:hidden"
        />
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-20 bottom-0 grid transition-all ease-in-out duration-300 z-50 ${
          toggle
            ? "grid-rows-[1fr] opacity-100  pointer-events-auto"
            : "grid-rows-[0fr] opacity-0  pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="h-full p-4 bg-theme-bg backdrop-blur-md overflow-y-auto">
            <div className="flex flex-col items-center space-y-5">
              <Button className="min-w-42.5" variant="outline">
                <div className="flex items-center gap-2 text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 3.69736C13.093 3.69736 14.7894 5.39465 14.7894 7.48769C14.7893 9.58065 13.093 11.2771 11 11.2771C8.90703 11.2771 7.21067 9.58066 7.21057 7.48769C7.21057 5.39464 8.90697 3.69736 11 3.69736ZM11 5.36189C9.82586 5.36189 8.8742 6.31355 8.8742 7.48769C8.8743 8.66175 9.82592 9.61349 11 9.61349C12.1741 9.61349 13.1257 8.66175 13.1258 7.48769C13.1258 6.31355 12.1741 5.36189 11 5.36189Z"
                      fill="#28282A"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 0C17.0749 0 22 4.92507 22 11C22 14.3659 20.4857 17.3763 18.1041 19.394C18.0404 19.469 17.9638 19.5322 17.8775 19.5808C15.9936 21.0927 13.6034 22 11 22C8.39631 22 6.00556 21.0929 4.12161 19.5808C4.03539 19.5321 3.95864 19.469 3.89504 19.394C1.51368 17.3763 0 14.3657 0 11C0 4.92507 4.92507 0 11 0ZM10.8917 13.3262C7.97344 13.3264 5.58435 15.587 5.37724 18.4525C6.94125 19.6344 8.88857 20.3355 11 20.3355C13.1112 20.3355 15.0579 19.6341 16.6219 18.4525C16.4147 15.587 14.0265 13.3264 11.1083 13.3262H10.8917ZM11 1.66453C5.84397 1.66453 1.66453 5.84397 1.66453 11C1.66453 13.3232 2.51443 15.4467 3.91851 17.0804C4.70939 13.9663 7.53159 11.6628 10.8917 11.6626H11.1083C14.4683 11.6628 17.2896 13.9664 18.0806 17.0804C19.4849 15.4466 20.3355 13.3234 20.3355 11C20.3355 5.84397 16.156 1.66453 11 1.66453Z"
                      fill="#28282A"
                    />
                  </svg>
                  <span className="font-700-line-136">{buttonSign}</span>
                </div>
              </Button>
              <Button className="min-w-[42.5]">
                <div className="flex items-center gap-2 text-lg">
                  <span className="font-700-line-136">{`הצטרפו כרופא / מטפל`}</span>
                </div>
              </Button>
            </div>

            <ul className="flex items-center flex-col text-primary font-500-line-130 text-2xl space-y-10 mt-10">
              <li className="hover:text-light-primary">
                <a href="#">לבעלי קליניקות</a>
              </li>
              <li className="hover:text-light-primary">
                <a href="#">למטפלים</a>
              </li>
              <li className="hover:text-light-primary">
                <a href="#">למטופלים</a>
              </li>
              <li className="hover:text-light-primary">
                <a href="#">אודות</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
