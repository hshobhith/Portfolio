import img1 from "../images/Screenshot 2025-06-30 215144.png";
import img2 from "../images/Screenshot 2025-06-30 215252.png";
import img3 from "../images/Screenshot 2025-06-30 215314.png";
import img4 from "../images/Screenshot 2025-06-30 215347.png";
import img5 from "../images/Screenshot 2025-07-01 210053.png";
import img6 from "../images/Screenshot 2025-05-05 120225.png";



export default function Projects() {
  const projects = [
        {
      title: "Padpu farms Website",
      description: "Responsive Full-stack website for Padpu farms.",
      image: img5, 
      link: "https://padpufarms.vercel.app/",
    },
    {
      title: "Architecture Portfolio Website",
      description: "Responsive architecture portfolio website built with React and Tailwind CSS.",
      image: img4, 
      link: "https://kolpedesignstudio.vercel.app/",
    },
    {
      title: "Scihubss Exam Portal",
      description: "Full stack exam portal to manage the candidates.",
      image: img3,
      link: "https://scihubss.com/exam/login.php",
    },
    {
      title: "Company website with Admin Dashboard",
      description: "A professional SciHubSS admin dashboard with data visualization.",
      image: img2,
      link: "https://scihubss.com",
    },
      {
      title: "Ydemy E-learning Platform",
      description: "Professional E-learning Platform bulid on meran full-stack.",
      image: img6,
      link: "https://ydemy-clone-api.vercel.app",
    },
    {
      title: "Architecture Website",
      description: "Architecture Website with a modern design.",
      image: img1,
      link: "https://home-scape-studio.web.app/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" >
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition" data-aos="zoom-in"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                🔗 Click Here
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
