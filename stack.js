stack = {
  "Programming Languages": [
    "JavaScript/TypeScript",
    "Python",
    "Rust",
    "Bash",
    "Dart",
    "Java",
  ],
  "Web Frameworks": ["React.js", "Express.js", "Tailwind CSS", "Daisy UI"],
  ORMs: ["Mongoose", "Sequelize"],
  DBMS: ["SQLite", "Oracle", "MongoDB"],
  "Data Science": ["Pandas", "Matplotlib", "Scikit-learn"],
  "Deep Learning": ["PyTorch"],
  Others: [
    "NLP",
    "Digital Audio Processing",
    "CLIs",
    "Docker",
    "Machine Learning",
  ],
  Languages: ["Arabic", "English", "French", "Kabyle"],
};

setTimeout(() => {
  const container = document.getElementById("stack-container");
  window.stack = stack;

  Object.entries(stack).forEach(([category, skills]) => {
    const section = document.createElement("div");
    section.className = "mb-2";

    const label = document.createElement("p");
    label.className = "mono text-xs text-[#666] tracking-widest uppercase mb-2";
    label.textContent = category;

    const row = document.createElement("div");
    row.className = "flex flex-wrap gap-2";

    skills.forEach((skill) => {
      const pill = document.createElement("span");
      pill.textContent = skill;
      pill.className =
        "mono text-[10px] text-base border border-[#1e1e1e] px-2.5 py-0.5 rounded-full";
      row.appendChild(pill);
    });

    section.appendChild(label);
    section.appendChild(row);
    container.appendChild(section);
  });
}, 0);
