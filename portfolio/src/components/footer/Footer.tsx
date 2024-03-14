import { AppLogo } from "@assets/AppLogo";

export const Footer = () => {
  const linkStyle = "font-bold hover:underline";

  return (
    <footer className="bg-black w-full flex items-center justify-between px-4 py-6">
      <div className="text-white flex gap-1 items-center">
        <AppLogo width="50px" height="50px" color="#FFF" />
        <h1 className="font-bold">Portfolio</h1>
      </div>
      <div className="text-white text-right text-sm">
        <p>
          Developed by{" "}
          <a
            href="https://github.com/JonasDias10"
            target="_blank"
            className={linkStyle}
          >
            Jonas Dias
          </a>
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://www.behance.net/jhanvishah2"
            target="_blank"
            className={linkStyle}
          >
            Jhanvi Shah
          </a>
        </p>
      </div>
    </footer>
  );
};
