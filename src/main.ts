import './style.css';
import { initializeNavigation } from './navigation';
import { initializeTypewriter } from './typewriter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-h-screen bg-primary text-white">
    <!-- Navigation -->
    <nav class="fixed w-full bg-gray-900 shadow-lg z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="text-2xl font-bold text-white">IM</div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center pt-16">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h1 class="text-5xl font-bold mb-6">Itumeleng Morena</h1>
        <div id="typewriter" class="text-2xl text-secondary mb-8"></div>
        <p class="text-xl text-gray-300 mb-8">Crafting elegant solutions through code</p>
        <div class="space-x-4">
          <a href="#projects" class="btn-primary">View Projects</a>
          <a href="#contact" class="btn-primary bg-accent">Get in Touch</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-900">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div class="text-gray-300 space-y-4">
          <p>
            I'm a passionate software developer with expertise in multiple programming languages and frameworks.
            My journey in software development has been driven by a desire to create impactful solutions
            that make a difference.
          </p>
          <p>
            With a strong foundation in TypeScript, HTML, Tailwind CSS, C++, Visual Basic, and Python,
            I bring versatility and depth to every project I undertake.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="skill-badge">TypeScript</span>
          <span class="skill-badge">HTML5</span>
          <span class="skill-badge">Tailwind CSS</span>
          <span class="skill-badge">C++</span>
          <span class="skill-badge">Visual Basic</span>
          <span class="skill-badge">Python</span>
          <span class="skill-badge">Git</span>
          <span class="skill-badge">Responsive Design</span>
          <span class="skill-badge">UI/UX Design</span>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-900">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Oumbish Security Project -->
          <div class="project-card">
            <div class="h-48 bg-gray-700"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Oumbish Security</h3>
              <p class="text-gray-300 mb-4">
                A comprehensive security company website featuring service listings,
                client portal, and real-time monitoring capabilities.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-sm bg-gray-700 px-2 py-1 rounded">TypeScript</span>
                <span class="text-sm bg-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
                <span class="text-sm bg-gray-700 px-2 py-1 rounded">React</span>
              </div>
              <a href="https://www.oumbishsecurity.com" target="_blank" class="text-secondary hover:text-accent">
                Visit Website →
              </a>
            </div>
          </div>

          <!-- Portfolio Website -->
          <div class="project-card">
            <div class="h-48 bg-gray-700"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Personal Portfolio</h3>
              <p class="text-gray-300 mb-4">
                An interactive portfolio website showcasing my projects and skills,
                built with modern web technologies.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-sm bg-gray-700 px-2 py-1 rounded">TypeScript</span>
                <span class="text-sm bg-gray-700 px-2 py-1 rounded">Tailwind CSS</span>
                <span class="text-sm bg-gray-700 px-2 py-1 rounded">HTML5</span>
              </div>
              <a href="#" class="text-secondary hover:text-accent">
                View Details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p class="text-gray-300 mb-6">
              Interested in working together or have a question? Feel free to reach out!
            </p>
            <div class="space-y-4">
              <p class="text-gray-300">📍 Johannesburg, South Africa</p>
              <p class="text-gray-300">📧 itumeleng@example.com</p>
            </div>
          </div>
          <form class="space-y-6">
            <div>
              <input type="text" placeholder="Your Name" class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
            </div>
            <div>
              <input type="email" placeholder="Your Email" class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
            </div>
            <div>
              <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
            </div>
            <button type="submit" class="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-8">
      <div class="max-w-7xl mx-auto px-4 text-center text-gray-300">
        <p>© 2024 Itumeleng Morena. All rights reserved.</p>
      </div>
    </footer>
  </div>
`;

initializeNavigation();
initializeTypewriter();