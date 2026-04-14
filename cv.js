function downloadCV() {
  const aboutForCV = window.aboutForCVData;
  const projects = window.projectsData;
  const element = document.createElement("div");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: 'Georgia', serif; color: #111; background: #fff; padding: 48px 56px; max-width: 780px; margin: auto; }
    h1 { color:#000 ;font-size: 28px; font-weight: bold; margin-bottom: 4px; }
    .subtitle { font-size: 13px; color: #555; margin-bottom: 6px; }
    .meta { font-size: 12px; color: #777; display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 32px; padding-bottom: 16px; border-bottom: 1px solid #e0e0e0; }
    h2 { font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #888; margin: 28px 0 12px; }
    .entry { margin-bottom: 16px; }
    .entry-title { color:#000 ;font-size: 15px; font-weight: bold; }
    .entry-sub { font-size: 12px; color: #777; margin-top: 2px; }
    .entry-desc { font-size: 13px; color: #444; margin-top: 6px; line-height: 1.6; }
    .tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px; }
    .tag { font-size: 10px; border: 1px solid #ccc; padding: 2px 8px; border-radius: 999px; color: #555; }
    .links { font-size: 11px; color: #777; margin-top: 4px; }
    .skills { color: #555;display: flex; gap: 8px; flex-wrap: wrap; }
    .skill { font-size: 11px; border: 1px solid #ccc; padding: 3px 10px; border-radius: 999px; color: #444; }
  </style>
</head>
<body>
  <h1>${aboutForCV.name}</h1>
  <p class="subtitle">${aboutForCV.tagline.replace("\n", " ")}</p>
  <div class="meta">
    <span>📍 ${aboutForCV.location}</span>
    ${aboutForCV.contacts.map((c) => `<span>${c.label}: ${c.value}</span>`).join("")}
    <span>Porfolio : g1ya777.dev</span>
  </div>

  <h2>Education</h2>
  ${aboutForCV.education
    .map(
      (e) => `
    <div class="entry">
      <div class="entry-title">${e.degree}</div>
      <div class="entry-sub">${e.school} &mdash; ${e.year}</div>
    </div>
  `,
    )
    .join("")}

  <h2>Skills</h2>
${Object.entries(window.stack)
  .map(
    ([category, skills]) => `
  <div class="skills"style="margin-bottom:10px">
    <div style="font-size:11px;color:#555;margin-bottom:4px">${category}  : </div>
    <div class="">${skills.map((s) => `<span class="skill">${s}</span>`).join("")}</div>
  </div>
`,
  )
  .join("")}

  <h2>Projects</h2>
  ${projects
    .map(
      (p) => `
    <div class="entry">
      <div class="entry-title">${p.name}</div>
      <div class="entry-desc">${p.description}</div>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="links">${p.links.map((l) => `${l.label}: ${l.href}`).join("  ·  ")}</div>
    </div>
  `,
    )
    .join("")}
</body>
</html>`;

  element.innerHTML = html;

  html2pdf()
    .set({
      margin: 5,
      filename: "Ouldali Aomer Gaya.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    })
    .from(element)
    .save();

  // const blob = new Blob([html], { type: "text/html" });
  // const url = URL.createObjectURL(blob);
  // const a = document.createElement("a");
  // a.href = url;
  // a.download = "cv-g1ya777.html";
  // a.click();
  // URL.revokeObjectURL(url);
}
