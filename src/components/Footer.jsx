import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-10xl mx-auto px-3 flex justify-between flex-wrap gap-10 pt-20">
        <div className="flex flex-col space-y-7">
          <div className="flex flex-col items-center gap-3">
            <button className="cursor-pointer">Playstore</button>
            <button className="cursor-pointer">Appstore</button>
          </div>
          <p>{FOOTER_CONTENT.reserved}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mt-5">
          {FOOTER_CONTENT.sections.map((s, index) => (
            <ul className="flex flex-col space-y-4" key={index}>
              <li className="font-bold text-md">{s.title}</li>
              {s.items.map((link, idx) => (
                <li className="text-neutral-400" key={idx}>
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
