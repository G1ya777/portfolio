const about = {
  name: "Ouldali Aomer Gaya",
  tagline:
    "Software Engineer. Full-Stack Web Developer / Machine Learning Developer",
  location: "Akbou, Béjaïa, Algeria",
  education: [
    {
      degree: "Bachelor's in Computer Science",
      school: "University of Béjaïa",
      year: "2018 – 2021",
    },
    {
      degree: "Master's in Computer Science",
      school: "University of Béjaïa",
      year: "2021 – 2023",
    },
  ],
  contacts: [
    {
      label: "GitHub",
      value: "github.com/G1ya777",
      href: "https://github.com/G1ya777",
    },
    {
      label: "Email",
      value: "g1ya777@protonmail.com",
      // href: "#",
      // copy: true,
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar-top");

  window.aboutForCVData = about;
  sidebar.innerHTML = `
  <p class="mono text-xs text-[#333] tracking-widest uppercase mb-6">Portfolio</p>

  <h1 class="text-xl md:text-2xl font-extrabold tracking-tight leading-tight mb-3">
    ${about.name}
  </h1>



  <p class="text-[#555] text-md leading-relaxed mb-2">
    ${about.tagline.replace("\n", "<br>")}
  </p>

      <!-- LOCATION -->
  <div class="mt-6">
    <p class="mono text-xs text-[#555] mb-8">📍 ${about.location}</p>
  </div>

  <!-- CONTACTS -->
  <nav class="flex flex-col gap-4 mb-10">
    ${about.contacts
      .map(
        (c) => `
        <a 
          ${c.href ? `href="${c.href}" target="_blank"` : `data-copy="${c.value}"`}
          class="mono text-xs text-[#444] hover:text-[#e8e4dc] transition-colors flex items-center gap-3 group cursor-pointer">
          
          <span class="inline-block w-5 h-px bg-current transition-all group-hover:w-8"></span>
          ${c.value}
        </a>
      `,
      )
      .join("")}
  </nav>

  <!-- EDUCATION -->
  <div>
    <p class="mono text-xs text-[#333] tracking-widest uppercase mb-3">Education</p>
    ${about.education
      .map(
        (e) => `
        <div class="mb-4">
          <p class="text-sm font-semibold text-[#e8e4dc]">${e.degree}</p>
          <p class="mono text-xs text-[#555]">${e.school} &mdash; ${e.year}</p>
        </div>
      `,
      )
      .join("")}
  </div>

  <!-- STACK -->
  <div class="mb-8">
    <p class="mono text-xs text-[#333] tracking-widest uppercase mb-3">Stack</p>
    <div id="stack-container" class="flex flex-wrap gap-2"></div>
  </div>


`;
});
