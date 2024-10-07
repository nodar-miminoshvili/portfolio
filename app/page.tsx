import About from './components/About/About';
import Projects from './components/Projects/Projects';

export default function Home() {
  return (
    <main className="container px-3 xs:px-5 md:px-7 py-9 sm:py-12 ">
      <About />
      <Projects />
    </main>
  );
}
