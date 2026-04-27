const headerMount = document.getElementById("site-header");

if (headerMount) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const baseLinkClass = "text-slate-700 hover:text-brand-blue";
  const activeLinkClass = "text-brand-blue";
  const navItems = [
    ["index.html", "Home"],
    ["about.html", "About"],
    ["services.html", "Services"],
    ["training.html", "Training"],
    ["outsourcing.html", "Outsourcing"],
    ["portfolio.html", "Portfolio"],
    ["contact.html", "Contact"],
  ];

  const navLinks = navItems
    .map(([href, label]) => {
      const linkClass = currentPage === href ? activeLinkClass : baseLinkClass;
      return `<a class="${linkClass}" href="${href}">${label}</a>`;
    })
    .join("");

  headerMount.innerHTML = `
    <div class="bg-brand-navy text-white">
      <div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 text-sm md:flex-row md:items-center md:justify-between">
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-white/85">
          <span>Monday - Friday, 08:00 - 17:00</span>
          <span>Wisma Bumiputera Lt. 1, Jl. Jend. Sudirman Kav. 75</span>
        </div>
        <div class="flex items-center gap-4">
          <a class="text-white/85 hover:text-brand-cyan" href="mailto:info@digitalent.co.id">info@digitalent.co.id</a>
          <a class="rounded-full bg-brand-cyan px-4 py-1.5 font-semibold text-brand-navy hover:bg-white" href="https://wa.me/628131337687">WhatsApp</a>
        </div>
      </div>
    </div>

    <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
        <a href="index.html"><img src="Logo/PNG/Horizontal_Background Terang.png" alt="DigiTalent" class="h-12 w-auto" /></a>
        <div class="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-bold">
          ${navLinks}
          <a class="rounded-md bg-brand-blue px-5 py-3 text-white hover:bg-brand-navy" href="contact.html">Free Consultation</a>
        </div>
      </nav>
    </header>
  `;
}
