export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

        <h1 className="font-bold text-xl text-sky-400">
          Portfolio of Tanjid Ibna Akid
        </h1>

        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}