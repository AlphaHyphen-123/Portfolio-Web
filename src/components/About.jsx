import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-lg p-8"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 transition-all duration-300 hover:text-green-600 hover:scale-105">
          About Me
        </h1>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6 transition-all duration-300 hover:bg-blue-600 hover:w-32"></div>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto transition-all duration-300 hover:text-gray-800 dark:hover:text-white hover:font-semibold">
          Hello, I'm <span className="font-semibold text-green-600 transition-all duration-300 hover:text-blue-600">Shivam Sen</span> from{" "}
          <span className="font-semibold text-green-600 transition-all duration-300 hover:text-blue-600">Bhopal, Madhya Pradesh</span>. I’m a
          passionate <span className="text-green-600 font-semibold transition-all duration-300 hover:text-blue-600">Web Developer</span> 
          and <span className="text-green-600 font-semibold transition-all duration-300 hover:text-blue-600">Software Engineer</span>{" "}
          with a strong focus on the{" "}
          <span className="font-semibold text-blue-600 transition-all duration-300 hover:text-green-600">MERN Stack</span> and{" "}
          <span className="font-semibold text-blue-600 transition-all duration-300 hover:text-green-600">Core Java</span>. I love creating
          scalable, efficient, and user-centric web applications. With a solid
          foundation in Data Structures and Algorithms (DSA) and practical
          knowledge of full-stack development, I aim to craft impactful digital
          solutions that make a real difference.
        </p>
      </div>

      {/* Career Objective */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center transition-all duration-300 hover:text-blue-600 hover:scale-105">
          <span className="mr-2">🎯</span> Career Objective
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:font-medium">
          To secure a challenging role in software development where I can apply
          my knowledge of Java, DSA, and Web Development to build scalable
          applications.
        </p>
      </div>

      {/* Education & Training */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center transition-all duration-300 hover:text-blue-600 hover:scale-105">
          <span className="mr-2">🎓</span> Education & Training
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:rotate-1">
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-semibold">
              <strong>B.Tech in Computer Science Engineering</strong> —{" "}
              <strong>Bansal Institute of Research and Technology</strong> (RGPV University),
              Bhopal — <strong className="text-green-600 transition-all duration-300 hover:text-blue-600">CGPA: 7.38</strong> (till 6th Sem)
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:rotate-1">
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-semibold">
              <strong>Diploma in Mechanical Engineering</strong> — Scope College of
              Engineering, Bhopal — <strong className="text-green-600 transition-all duration-300 hover:text-blue-600">84%</strong>
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:rotate-1">
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-semibold">
              <strong>Class X</strong> — Govt. H. S. School (MP Board), Bhopal —{" "}
              <strong className="text-green-600 transition-all duration-300 hover:text-blue-600">86%</strong>
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:rotate-1">
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-semibold">
              <strong>Training:</strong> Java with DSA & MERN Stack — Coding Thinker
              Institute (Sep 2025)
            </p>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center transition-all duration-300 hover:text-blue-600 hover:scale-105">
          <span className="mr-2">💡</span> Technical Skills
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105">
          <div className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-semibold">
            <p><strong>Languages:</strong> Core Java, C++ (Basic)</p>
            <p><strong>Web Technologies:</strong> HTML, CSS, JavaScript, React.js, Node.js, Express.js</p>
            <p><strong>Database:</strong> MySQL, MongoDB</p>
            <p><strong>Tools:</strong> Git, GitHub, VS Code, Postman</p>
            <p className="md:col-span-2"><strong>Concepts:</strong> OOP, DSA, SDLC, Software Testing (Manual & Automation Basics), Operating Systems, DBMS</p>
          </div>
        </div>
      </div>

      {/* Core Skills */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center transition-all duration-300 hover:text-blue-600 hover:scale-105">
          <span className="mr-2">🚀</span> Core Skills
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105">
          <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-semibold">
            <li>🔍 Strong Problem-Solving & Debugging mindset</li>
            <li>📚 Quick Learner with adaptability to new technologies</li>
            <li>🤝 Team Collaboration and familiarity with Agile Methodology</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center transition-all duration-300 hover:text-blue-600 hover:scale-105">
          <span className="mr-2">🧭</span> Projects
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:rotate-1">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-all duration-300 hover:text-green-600">RGPV Study Material Website</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-medium">
              Platform for RGPV engineering students to access notes, PYQs, and study resources. Built with{" "}
              <strong className="text-blue-600 transition-all duration-300 hover:text-green-600">React.js</strong> (frontend) and{" "}
              <strong className="text-blue-600 transition-all duration-300 hover:text-green-600">Node.js, Express.js, MongoDB</strong> (backend).
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:rotate-1">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-all duration-300 hover:text-green-600">MySeniorBuddy</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-medium">
              A mentorship platform connecting juniors with seniors for guidance. Developed responsive frontend and REST API-based backend with role-based access.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:rotate-1">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-all duration-300 hover:text-green-600">Blog Website</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-medium">
              Blog platform with user registration, login, and post creation using{" "}
              <strong className="text-blue-600 transition-all duration-300 hover:text-green-600">MERN Stack</strong> and JWT authentication.
            </p>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center transition-all duration-300 hover:text-blue-600 hover:scale-105">
          <span className="mr-2">🏆</span> Achievements
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105">
          <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-semibold">
            <li>Earned <strong className="text-green-600 transition-all duration-300 hover:text-blue-600">100 Days of LeetCode Badge (2025)</strong> by solving problems consistently for 100+ days.</li>
            <li>Solved <strong className="text-green-600 transition-all duration-300 hover:text-blue-600">200+ problems on LeetCode</strong> and <strong>50+ on GeeksforGeeks</strong>.</li>
            <li>Participated in <strong className="text-green-600 transition-all duration-300 hover:text-blue-600">CodeClash Programming Contest (Mar 2024)</strong> and solved real-time coding challenges.</li>
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center transition-all duration-300 hover:text-blue-600 hover:scale-105">
          <span className="mr-2">📜</span> Certifications
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105">
          <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-semibold">
            <li><strong>JavaScript Certification</strong> — Coursera (Jun 2025)</li>
            <li><strong>C++ Certification</strong> — Saylor Academy (Oct 2024)</li>
            <li><strong>Java Programming</strong> — HackerRank (Mar 2024)</li>
          </ul>
        </div>
      </div>

      {/* Areas of Interest */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center transition-all duration-300 hover:text-blue-600 hover:scale-105">
          <span className="mr-2">🧠</span> Areas of Interest
        </h2>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105">
          <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-2 transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:font-semibold">
            <li>Data Structures and Algorithms</li>
            <li>Database Systems and SQL</li>
            <li>Web Development</li>
            <li>Software Testing & QA</li>
          </ul>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-4 flex items-center transition-all duration-300 hover:text-blue-600 hover:scale-105">
          <span className="mr-2">🌟</span> Mission Statement
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:bg-green-50 dark:hover:bg-gray-700 hover:shadow-xl hover:scale-105 hover:font-medium">
          My mission is to leverage my skills in{" "}
          <span className="font-semibold text-blue-600 transition-all duration-300 hover:text-green-600">Java, DSA, and Full-Stack Web Development</span>{" "}
          to create smart, scalable, and efficient software solutions. I am
          dedicated to continuous learning and innovation, striving to contribute
          meaningfully to the tech community while building impactful products.
        </p>
      </div>
    </div>
  );
}

export default About;
