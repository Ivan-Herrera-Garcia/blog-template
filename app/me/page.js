'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";
import EducationSection from "@/components/EducationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8 text-black">
        <section className="bg-white p-6 rounded shadow-md mb-6 transition-all duration-300 hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-[1.01]">
          <h1 className="text-3xl font-bold">IVÁN HERRERA</h1>
          <p className="text-xl text-gray-700">Full Stack Developer</p>

          <div className="flex flex-wrap gap-4 mt-4 text-sm">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-orange-500" />
              Coahuila, Mexico
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-red-400" />
              <a href="mailto:ivan.herrera.garc@gmail.com" className="text-blue-600 hover:text-emerald-500">
                ivan.herrera.garc@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-2">
              <FaLinkedin className="text-blue-700" />
              <a href="https://www.linkedin.com/in/bellkhen/" className="text-blue-600 hover:text-emerald-500">
                linkedin.com/in/bellkhen
              </a>
            </span>
            <span className="flex items-center gap-2">
              <FaGithub className="text-gray-700" />
              <a href="https://github.com/Ivan-Herrera-Garcia" className="text-blue-600 hover:text-emerald-500">
                github.com/Ivan-Herrera-Garcia
              </a>
            </span>
          </div>


          {/* More about me */}
          <div className="mt-6 text-sm text-gray-700 space-y-2">
            <h2 className="text-lg font-semibold">More About Me</h2>
            <p>Passionate about philosophy, logic, and complex systems.</p>
            <p>I love designing narrative-driven games with interdimensional exploration mechanics.</p>
            <p>Always striving to write cleaner, more functional, and scalable code.</p>
            <p>
              I also create digital content on Gumroad:{" "}
              <a
                href="https://bellkhen.gumroad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-emerald-500 underline"
              >
                Bellkhen
              </a>
            </p>
          </div>
        </section>


        <section className="bg-white p-6 rounded shadow-md mb-6 transition-all duration-300 hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-[1.01]">
          <h2 className="text-3xl font-bold mb-6">EXPERIENCE</h2>
          {/* Bloque 1 - API Inmuebles */}
          <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold">FULL STACK DEVELOPER - API INMUEBLES & ASESORES</h3>
              <p className="text-base text-gray-600 mt-1">April 2023 – Present | Torreón, Coahuila</p>
              <ul className="list-disc list-inside text-base mt-4 space-y-2">
                <li>CRM development using ASP.NET MVC, LINQ, Bootstrap, and SQL Server.</li>
                <li>Frontend and backend integration of Propiedades México using ReactJS, NextJS, and Tailwind CSS.</li>
                <li>Integration with external tools and internal SQL Server APIs.</li>
                <li>Automation of tasks using <strong>n8n</strong> with basic integration knowledge of <strong>Kommo</strong>.</li>
                <li>Google Calendar synchronization for scheduling in <strong>licencia.propiedadesmexico</strong>.</li>
                <li>Experience using <strong>Odoo&apos;s ticketing system</strong> for internal task and support tracking.</li>
                <li>WhatsApp automation via <strong>WPPConnect</strong> for lead communication and alerts.</li>
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="overflow-x-hidden whitespace-nowrap space-x-4 flex pb-2">
                <Link
                  href="https://propiedadesmexico.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transform hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src="/pm.png"
                    alt="Propiedades México"
                    width={600}
                    height={400}
                    className="rounded shadow-md"
                  />
                </Link>

                <Link
                  href="https://licencia.propiedadesmexico.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transform hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src="/pmx.png"
                    alt="Propiedades México Vista 2"
                    width={600}
                    height={400}
                    className="rounded shadow-md"
                  />
                </Link>
              </div>

            </div>
          </div>

          {/* Bloque 2 - Immarketing */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold">WEB DEVELOPER - Immarketing</h3>
              <p className="text-base text-gray-600 mt-1">2024 – Present | Torreón, Coahuila</p>
              <ul className="list-disc list-inside text-base mt-4 space-y-2">
                <li>Online store configuration using Shopify and Liquid templates.</li>
                <li>Inventory scraping automation.</li>
                <li>Corporate landing page deployment and publication.</li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Link
                href="https://immarketing.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/immarketing.png"
                  alt="Immarketing Project"
                  width={600}
                  height={400}
                  className="rounded shadow-md"
                />
              </Link>
            </div>
          </div>
        </section>


        <section className="bg-white p-6 rounded shadow-md mb-6 transition-all duration-300 hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-[1.01]">
          <h2 className="text-2xl font-bold mb-6">PROJECTS</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Image-to-Text */}
            <div className="border rounded-lg p-4 shadow hover:shadow-2xl transition">
              <h3 className="text-lg font-semibold mb-1">
                <a href="https://github.com/Ivan-Herrera-Garcia/Image-to-Text" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Image-to-Text
                </a>
              </h3>
              <p className="text-sm text-gray-700 mb-2">React app using Tesseract.js to extract text from images.</p>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">JavaScript / OCR</span>
            </div>

            {/* ChatDynamix */}
            <div className="border rounded-lg p-4 shadow hover:shadow-2xl transition">
              <h3 className="text-lg font-semibold mb-1">
                <a href="https://github.com/RETBOT/ChatDynamix" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  ChatDynamix
                </a>
              </h3>
              <p className="text-sm text-gray-700 mb-2">Offline chatbot using GPT4ALL with Python and OpenAI libraries.</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Python / Jupyter / GPT</span>
            </div>

            {/* Web Scraping */}
            <div className="border rounded-lg p-4 shadow hover:shadow-2xl transition">
              <h3 className="text-lg font-semibold mb-1">
                <a href="https://github.com/Ivan-Herrera-Garcia/Web-Scraping" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Web Scraping
                </a>
              </h3>
              <p className="text-sm text-gray-700 mb-2">Data extraction with C#, Regex and NuGet packages. Purely educational use.</p>
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">C# / Regex / .NET</span>
            </div>

            {/* Things with Python */}
            <div className="border rounded-lg p-4 shadow hover:shadow-2xl transition">
              <h3 className="text-lg font-semibold mb-1">
                <a href="https://github.com/Ivan-Herrera-Garcia/Things-with-Python" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Things with Python
                </a>
              </h3>
              <p className="text-sm text-gray-700 mb-2">Mini projects using Python, OpenCV, Turtle and more.</p>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Python / Turtle / OpenCV</span>
            </div>

            {/* Certificados */}
            <div className="border rounded-lg p-4 shadow hover:shadow-2xl transition">
              <h3 className="text-lg font-semibold mb-1">
                <a href="https://github.com/Ivan-Herrera-Garcia/Certificados" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Certificados
                </a>
              </h3>
              <p className="text-sm text-gray-700 mb-2">Curricular certificates acquired during my academic formation.</p>
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">PDF / Repository</span>
            </div>
          </div>
        </section>


        <EducationSection />

        <section className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skills */}
            <div className="bg-white p-6 rounded shadow-md mb-6 transition-all duration-300 hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-[1.01]">
              <h2 className="text-2xl font-bold mb-4">SKILLS</h2>

              <div className="mb-4">
                <h3 className="font-semibold text-sm text-gray-700 mb-2">Soft Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {['Teamwork', 'Critical Thinking', 'Self-taught'].map((skill, index) => (
                    <span
                      key={`soft-${index}`}
                      className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-gray-700 mb-2">Hard Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {['C#', '.NET', 'REST API', 'JavaScript', 'NextJS', 'Node', 'SQL Server', 'MongoDB Atlas'].map((skill, index) => (
                    <span
                      key={`hard-${index}`}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white p-6 rounded shadow-md mb-6 transition-all duration-300 hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-[1.01]">
              <h2 className="text-2xl font-bold mb-4">LANGUAGES</h2>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Spanish</span>
                  <span className="text-gray-600">Native</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '100%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">English</span>
                  <span className="text-gray-600">B2</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '65%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-white p-6 rounded shadow-md mb-6 transition-all duration-300 hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-[1.01]">
          <h2 className="text-2xl font-bold mb-6">PARTICIPATIONS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* HackMTY */}
            <div className="rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col justify-between bg-white">
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold mb-1">HackMTY 2024</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Web app developed using Oracle APEX focused on improving habits through calendars, graphs, and group collaboration.
                </p>
              </div>
              <Image
                src="/oracle_apex.jpg"
                alt="HackMTY Oracle APEX"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }}
              />
            </div>

            {/* InnovaTec */}
            <div className="rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col justify-between bg-white">
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold mb-1">InnovaTec 2023</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Django project created to solve technical challenges during a national competition in Saltillo, Coahuila.
                </p>
              </div>
              <Image
                src="/django.jpg"
                alt="InnovaTec"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }}
              />
            </div>

            {/* Concurso San Pedro */}
            <div className="rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col justify-between bg-white">
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold mb-1">7th ITS San Pedro International Programming Contest</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Participation in the 7th International Programming Contest held by ITS San Pedro.
                </p>
              </div>
              <Image
                src="/mono.jpg"
                alt="Programming Contest"
                className="w-full h-48 object-cover"
                width={500}
                height={300}
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }}
              />
            </div>
          </div>
        </section>


        {/* How make this site */}
        <section className="bg-white p-6 rounded shadow-md mb-6 transition-all duration-300 hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-[1.01]">
          <h2 className="text-2xl font-bold mb-4">How I Made This Site</h2>
          <p className="text-gray-700 mb-4">
            This portfolio website was built using <strong>Next.js</strong>, a React framework that enables server-side rendering and static site generation.
          </p>
          <p className="text-gray-700 mb-4">
            I utilized <strong>Tailwind CSS</strong> for styling, which allowed for rapid UI development with a utility-first approach and excellent responsiveness across devices.
          </p>
          <p className="text-gray-700 mb-4">
            The site is connected to a <strong>MongoDB Atlas</strong> database and uses <strong>Cloudinary</strong> for optimized image uploads and delivery.
          </p>
          <p className="text-gray-700 mb-4">
            I also integrated useful npm packages like <strong>js-cookie</strong> for session handling, and applied <strong>PageSpeed</strong> insights best practices to enhance SEO and performance.
          </p>
        </section>

        <section className="bg-white p-6 rounded shadow-md mb-6 transition-all duration-300 hover:shadow-2xl hover:border hover:border-gray-300 hover:scale-[1.01]">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.
          </p>
          <p className="text-gray-700 mb-4">
            I&apos;m always open to discussing new projects, collaborations, or opportunities.
          </p>
          <p className="text-gray-700">
            Thank you for visiting my portfolio!
          </p>
          {/* Enlace para ir a la pagina de inicio */}
          <Link href="/" className="text-blue-500 hover:underline">
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Go to Home
            </button>
          </Link>
        </section>
      </main>
      <Footer me={true} />
    </div>
  );
}
