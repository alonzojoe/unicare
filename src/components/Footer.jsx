import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-10xl border-t border-t-palette-primary-200 mx-auto px-3 flex justify-between flex-wrap gap-10 pt-7.5 mb-20">
        <div className="flex flex-col items-start space-y-7 mt-5">
          <div className="flex flex-col items-center gap-3">
            <button className="cursor-pointer">Playstore</button>
            <button className="cursor-pointer">Appstore</button>
          </div>
          <p className="text-light-primary text-sm font-400-line-147">
            {FOOTER_CONTENT.reserved}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mt-5">
          {FOOTER_CONTENT.sections.map((s, index) => (
            <ul className="flex flex-col space-y-4" key={index}>
              <li className="font-500-line-130 text-xl text-primary">
                {s.title}
              </li>
              {s.items.map((link, idx) => (
                <li className="text-base text-light-primary" key={idx}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
