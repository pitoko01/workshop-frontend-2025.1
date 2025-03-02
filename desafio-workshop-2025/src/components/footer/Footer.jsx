import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="bg-trasparent text-gray-700 p-4">
      <div className="flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/matheus-ramalho-a54a27272"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <span className="ml-1 text-xl">Linkedin</span>
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/pitoko01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <span className="ml-1 text-xl">GitHub</span>
          <GitHubIcon />
        </a>
      </div>
    </footer>
  );
}
