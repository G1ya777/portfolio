document.addEventListener("DOMContentLoaded", () => {
  const tagStyles = {
    rust: "border-[#6b3018] text-[#c4724a] bg-[#160c06]",
    python: "border-[#183350] text-[#5a9fd4] bg-[#080f18]",
    react: "border-[#123030] text-[#4abacc] bg-[#060f10]",
    typescript: "border-[#182050] text-[#5a7fd4] bg-[#080b18]",
    wasm: "border-[#22163c] text-[#8a6adc] bg-[#0d0810]",
    flask: "border-[#142414] text-[#5aac5a] bg-[#060c06]",
    docker: "border-[#082038] text-[#2a9fd4] bg-[#030810]",
    asr: "border-[#301424] text-[#cc6aaa] bg-[#100608]",
    cli: "border-[#242414] text-[#aaaa44] bg-[#0c0c06]",
  };

  const projects = [
    {
      name: "Mmeslay",
      subtitle: "Python · Deep Learning",
      description:
        "An Automatic Speech Recognition system for the Kabyle language. The CLI lets you run inference on a single audio file, batch-test the model on a folder, or launch a Flask API server, or Launch a Gradio Web UI. Fully Dockerized.",
      tags: ["python", "flask", "asr", "docker", "cli"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/G1ya777/Mmeslay_backend-CLI",
        },
      ],
    },
    {
      name: "GRU",
      subtitle: "Rust · CLI",
      description:
        "G Rename Utility — a feature-rich CLI to batch rename files. Supports backup generation, dry-run preview, CRC32 checksums, cycle detection, random ordering, Unicode-to-ASCII, and more. Available on crates.io and the Arch AUR.",
      tags: ["rust", "cli"],
      links: [
        { label: "GitHub", href: "https://github.com/G1ya777/GRU" },
        {
          label: "crates.io",
          href: "https://crates.io/crates/rename-gru",
          accent: true,
        },
        {
          label: "Arch Linux AUR",
          href: "https://aur.archlinux.org/packages/rename-gru-git",
        },
      ],
    },

    {
      name: "Archiveator",
      subtitle: "React · Web",
      description:
        "A React + TypeScript app that extracts archives entirely on the client side via WebAssembly. No files leave the browser. Deployed on Cloudflare Workers.",
      tags: ["react", "typescript", "wasm"],
      links: [
        { label: "GitHub", href: "https://github.com/G1ya777/Archiveator" },
        {
          label: "Live demo",
          href: "https://archiveator.g1ya777-343.workers.dev/",
          accent: true,
        },
      ],
    },
  ];
  window.projectsData = projects;
  const container = document.getElementById("projects-container");

  projects.forEach((project, i) => {
    const delay = i * 0.1;

    const card = document.createElement("div");
    card.className =
      "bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 transition-all duration-200 hover:border-[#333] hover:bg-[#141414] hover:-translate-y-0.5";
    card.style.animation = `fadeUp 0.5s ease ${delay}s both`;

    // Header
    const header = document.createElement("div");
    header.className = "flex items-start justify-between gap-4 mb-1";

    const title = document.createElement("h2");
    title.textContent = project.name;
    title.className = "text-lg font-bold";

    const sub = document.createElement("span");
    sub.textContent = project.subtitle;
    sub.className = "mono text-xs text-[#333] pt-1 shrink-0";

    header.appendChild(title);
    header.appendChild(sub);

    // Description
    const desc = document.createElement("p");
    desc.textContent = project.description;
    desc.className = "text-[#555] text-sm leading-relaxed mb-5 mt-1";

    // Tags
    const tagsRow = document.createElement("div");
    tagsRow.className = "flex flex-wrap gap-2 mb-5";
    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      span.className = `mono text-[11px] border px-2.5 py-0.5 rounded-full whitespace-nowrap ${tagStyles[tag] ?? "border-[#262626] text-[#777] bg-[#1a1a1a]"}`;
      tagsRow.appendChild(span);
    });

    // Links
    const linksRow = document.createElement("div");
    linksRow.className = "flex gap-3 flex-wrap";
    project.links.forEach((link) => {
      const a = document.createElement("a");
      a.textContent = link.label;
      a.href = link.href;
      a.target = "_blank";
      a.className = link.accent
        ? "mono text-xs text-[#c4a45a] border border-[#3a2c10] px-4 py-1.5 rounded-lg no-underline transition-all hover:border-[#c4a45a] hover:bg-[#1a1408]"
        : "mono text-xs text-[#555] border border-[#1e1e1e] px-4 py-1.5 rounded-lg no-underline transition-all hover:text-[#e8e4dc] hover:border-[#444] hover:bg-[#1a1a1a]";
      linksRow.appendChild(a);
    });

    card.appendChild(header);
    card.appendChild(desc);
    card.appendChild(tagsRow);
    card.appendChild(linksRow);
    container.appendChild(card);
  });

  // Inject keyframes once
  const style = document.createElement("style");
  style.textContent = `@keyframes fadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }`;
  document.head.appendChild(style);
});
