const footerMount = document.getElementById("site-footer");

if (footerMount) {
  footerMount.innerHTML = `
    <footer class="bg-brand-navy text-white">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1.1fr]">
        <div>
          <img src="Logo/PNG/Horizontal_Background Gelap.png" alt="DigiTalent" class="h-14 w-auto" />
          <p class="mt-5 max-w-md leading-7 text-white/70">PT. Systech Talenta Digital, known as DigiTalent, supports digital transformation through capable, industry-ready talent. As part of SGI Asia Group, we focus on IT Training and IT Outsourcing.</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="rounded bg-white/10 px-3 py-1 text-sm font-semibold text-brand-cyan">SGI Asia Group</span>
            <span class="rounded bg-white/10 px-3 py-1 text-sm font-semibold text-brand-cyan">CompTIA Partner Ecosystem</span>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-extrabold">Pages</h3>
          <ul class="mt-4 space-y-3 text-white/70">
            <li><a href="index.html" class="hover:text-brand-cyan">Home</a></li>
            <li><a href="about.html" class="hover:text-brand-cyan">About Us</a></li>
            <li><a href="services.html" class="hover:text-brand-cyan">Services</a></li>
            <li><a href="training.html" class="hover:text-brand-cyan">Training</a></li>
            <li><a href="outsourcing.html" class="hover:text-brand-cyan">Outsourcing</a></li>
            <li><a href="portfolio.html" class="hover:text-brand-cyan">Portfolio</a></li>
            <li><a href="contact.html" class="hover:text-brand-cyan">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-extrabold">Services</h3>
          <ul class="mt-4 space-y-3 text-white/70">
            <li><a href="training.html" class="hover:text-brand-cyan">IT Training</a></li>
            <li><a href="training.html" class="hover:text-brand-cyan">Certification Preparation</a></li>
            <li><a href="training.html" class="hover:text-brand-cyan">Corporate In-House Training</a></li>
            <li><a href="outsourcing.html" class="hover:text-brand-cyan">IT Outsourcing</a></li>
            <li><a href="outsourcing.html" class="hover:text-brand-cyan">Dedicated IT Staff</a></li>
            <li><a href="outsourcing.html" class="hover:text-brand-cyan">Project-Based IT Teams</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-extrabold">Contact</h3>
          <ul class="mt-4 space-y-3 text-white/70">
            <li><span class="font-semibold text-white">Phone:</span> <a href="tel:+62215224520" class="hover:text-brand-cyan">(+62) 21 522 4520</a></li>
            <li><span class="font-semibold text-white">Email:</span> <a href="mailto:info@digitalent.co.id" class="hover:text-brand-cyan">info@digitalent.co.id</a></li>
            <li><span class="font-semibold text-white">Website:</span> <a href="https://www.digitalent.co.id" class="hover:text-brand-cyan">www.digitalent.co.id</a></li>
            <li><span class="font-semibold text-white">WhatsApp:</span> <a href="https://wa.me/628131337687" class="hover:text-brand-cyan">+62 813 1337 687</a></li>
            <li><span class="font-semibold text-white">Address:</span> Wisma Bumiputera Lantai 1, Jl. Jend. Sudirman Kav. 75 Jakarta Selatan 12910 Indonesia</li>
          </ul>
          <div class="mt-6 flex flex-wrap items-center gap-4">
            <a class="block h-10 w-10 transition hover:scale-105" href="https://www.instagram.com/digitalent.systech" aria-label="DigiTalent Instagram">
              <img src="Logo/instagram.png" alt="Instagram" class="h-full w-full object-contain" />
            </a>
            <a class="block h-10 w-10 transition hover:scale-105" href="https://www.linkedin.com/company/pt-systech-talenta-digital-digitalent" aria-label="DigiTalent LinkedIn">
              <img src="Logo/linkedin.webp" alt="LinkedIn" class="h-full w-full object-contain" />
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-white/10">
        <div class="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>Copyright (c) 2026 PT. Systech Talenta Digital. All Rights Reserved.</p>
          <p>Integrity, professionalism, quality, and sustainable digital growth.</p>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/628131337687" class="fixed bottom-5 right-5 z-50 block h-16 w-16 transition hover:scale-105" aria-label="Chat DigiTalent via WhatsApp">
      <img src="Logo/whatsapp.png" alt="WhatsApp" class="h-full w-full object-contain" />
    </a>
  `;
}
