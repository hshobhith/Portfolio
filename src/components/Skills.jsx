
// src/components/Skills.jsx
export default function Skills() {
  const skills = ['Html','Php','React', 'Node.js', 'Tailwind CSS', 'JavaScript', 'MongoDB', 'MySQL'];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
                <div
                    key={skill}
                    className="bg-indigo-100 text-indigo-700 text-center py-4 rounded-xl font-semibold shadow" data-aos="zoom-in"
                >
                    {skill}
                </div>
            ))}

        </div>
      </div>
    </section>
  );
}