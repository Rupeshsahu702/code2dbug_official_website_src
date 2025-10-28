// src/components/FilterGallery.jsx
import React, { useEffect, useState, useRef } from "react";

const FilterGallery = () => {
  // Categories
  const categories = [
    "ALL",
    "DESIGN FOR GOOD",
    "FASHION & BEAUTY",
    "FOOD & BEVERAGE",
    "HEALTH & WELLNESS",
    "HOME & LIFESTYLE",
    "TECH & FINANCE",
    "WORK IN PROGRESS",
  ];

  // Projects
  const projects = [
    { id: 1, name: "HOCCO", category: "FOOD & BEVERAGE", image: "./src/assets/hocco.png", url: "https://www.hocco.in/" },
    { id: 2, name: "HK VITALS", category: "HEALTH & WELLNESS", image: "./src/assets/hkv.png", url: "https://www.hkvitals.com/" },
    { id: 3, name: "FEIER", category: "FASHION & BEAUTY", image: "./src/assets/feier.png", url: "https://shopfeier.com/" },
    { id: 4, name: "SENSING", category: "FASHION & BEAUTY", image: "./src/assets/sens.png", url: "https://www.sensingyourskin.com/" },
    { id: 5, name: "PATTRI", category: "FOOD & BEVERAGE", image: "./src/assets/pattri.png", url: "https://pattri.in/" },
    { id: 6, name: "CLIMATE SMART FOREST ECONOMY PROGRAM", category: "DESIGN FOR GOOD", image: "./src/assets/climate.png", url: "https://www.csfep.org/" },
    { id: 7, name: "INDIA CLIMATE COLLABORATIVE", category: "DESIGN FOR GOOD", image: "./src/assets/icc.png", url: "https://indiaclimatecollaborative.org/" },
    { id: 8, name: "DALBERG", category: "DESIGN FOR GOOD", image: "./src/assets/Dalberg-thumb.png", url: "https://dalberg.com/" },
    { id: 9, name: "NAILS OUR WAY", category: "FASHION & BEAUTY", image: "./src/assets/nailour.png", url: "https://www.tirabeauty.com/brand/nails-our-way" },
    { id: 10, name: "OPEN SECRET", category: "FOOD & BEVERAGE", image: "./src/assets/opensecret.png", url: "https://opensecret.in/" },
    { id: 11, name: "JIFFY EATS", category: "FOOD & BEVERAGE", image: "./src/assets/jiffyeats.png", url: "https://www.instagram.com/jiffy.eats/" },
    { id: 12, name: "SATVIC MOVEMENT", category: "HEALTH & WELLNESS", image: "./src/assets/satvic.png", url: "https://satvicmovement.org/" },
    { id: 13, name: "WELLBEING NUTRITION", category: "HEALTH & WELLNESS", image: "./src/assets/wellbeing.png", url: "https://wellbeingnutrition.com/" },
    { id: 14, name: "DR. AGARWALS", category: "HEALTH & WELLNESS", image: "./src/assets/drags.png", url: "https://www.dragarwal.com/" },
    { id: 15, name: "UGAOO", category: "HOME & LIFESTYLE", image: "./src/assets/ugaoo.png", url: "https://www.ugaoo.com/" },
    { id: 16, name: "THE HOUSE OF THINGS", category: "HOME & LIFESTYLE", image: "./src/assets/tht.png", url: "https://thehouseofthings.com/" },
    { id: 17, name: "NETERWALA & AIBARA", category: "HOME & LIFESTYLE", image: "./src/assets/neterwala.jpg", url: "https://www.instagram.com/neterwala.aibara/" },
    { id: 18, name: "CITYFLO", category: "TECH & FINANCE", image: "./src/assets/cityflo.png", url: "https://www.cityflo.com/" },
    { id: 19, name: "BHIVE", category: "TECH & FINANCE", image: "./src/assets/bhivealt.png", url: "https://bhivealts.com/" },
    { id: 20, name: "KEDAARA", category: "TECH & FINANCE", image: "./src/assets/kedaara.png", url: "https://kedaara.com/" },
    { id: 21, name: "MOMO MAGIC BHILAI", category: "WORK IN PROGRESS", image: "./src/assets/momo-magic.jpg", url: "https://www.instagram.com/momomagiccafe.bhilai/" },
    { id: 22, name: "REEGALIA", category: "WORK IN PROGRESS", image: "./src/assets/regaalia.png", url: "https://www.reegalia.com/" },
  ];

  const [activeCategory, setActiveCategory] = useState("ALL");
  const filteredProjects =
    activeCategory === "ALL" ? projects : projects.filter((p) => p.category === activeCategory);

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const closeBtnRef = useRef(null);

  const disclaimer =
    "We’re new and hungry, the examples below are style demos, not client work (yet!).";

  function openModal(project) {
    setSelected(project);
    setIsOpen(true);
  }
  function navigateTo(url) {
    const safe = (url || "").trim();
    if (!safe) return;
    window.location.href = safe;
  }
  function handleProjectClick(project) {
    if (project.category === "WORK IN PROGRESS") navigateTo(project.url);
    else openModal(project);
  }
  function closeModal() {
    setIsOpen(false);
    setSelected(null);
  }
  function agreeAndContinue() {
    if (selected?.url) navigateTo(selected.url);
    else closeModal();
  }

  // Modal a11y: escape + scroll lock + focus
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev || "";
    };
  }, [isOpen]);

  // Tabs slider
  const tabsRef = useRef(null);
  const activeBtnRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = tabsRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft < max - 1);
  };
  const scrollTabs = (dir) => {
    const el = tabsRef.current;
    if (!el) return;
    const amount = Math.max(160, Math.floor(el.clientWidth * 0.6));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  useEffect(() => {
    activeBtnRef.current?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeCategory]);
  useEffect(() => {
    updateArrows();
    const el = tabsRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  return (
    <>
      <div className="w-full bg-grade relative px-[5vw] sm:px-[10vw] py-[30vw] mt-[5vw] sm:py-[5vw]">
        {/* Tabs row */}
        <div className="relative mb-8">
          <div className="relative h-12 flex items-center">
            {/* Left arrow */}
            <button
              type="button"
              aria-label="Scroll categories left"
              onClick={() => scrollTabs(-1)}
              disabled={!canLeft}
              className={`hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2
                          h-10 w-10 items-center justify-center rounded-full
                          bg-white/[0.06] text-white/70 ring-1 ring-white/10 shadow
                          transition-colors
                          ${canLeft ? "hover:bg-white/[0.12] hover:text-white" : "opacity-40 pointer-events-none"}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            {/* Tabs container */}
            <div
              ref={tabsRef}
              className="flex-1 mx-12 flex gap-6 overflow-x-auto scroll-smooth items-center
                         [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    ref={isActive ? activeBtnRef : null}
                    onClick={() => setActiveCategory(cat)}
                    aria-current={isActive ? "page" : undefined}
                    className={`whitespace-nowrap text-sm font-semibold tracking-wide pb-1
                      ${isActive ? "text-white border-b-2 border-white"
                                 : "text-white/80 hover:text-white"}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Right arrow */}
            <button
              type="button"
              aria-label="Scroll categories right"
              onClick={() => scrollTabs(1)}
              disabled={!canRight}
              className={`hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2
                          h-10 w-10 items-center justify-center rounded-full
                          bg-white/[0.06] text-white/70 ring-1 ring-white/10 shadow
                          transition-colors
                          ${canRight ? "hover:bg-white/[0.12] hover:text-white" : "opacity-40 pointer-events-none"}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="m8.59 16.59 1.41 1.41 6-6-6-6-1.41 1.41L13.17 12z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 bg-grade lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cursor-pointer group"
              onClick={() => handleProjectClick(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleProjectClick(project);
              }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg w-full h-56 object-cover group-hover:opacity-90 transition"
              />
              <h3 className="text-lg text-white font-semibold mt-3">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer Modal */}
      {isOpen && (
        <div role="dialog" aria-modal="true" aria-labelledby="disclaimer-title" className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-grade/70" onClick={closeModal} aria-hidden="true" />
          <div className="relative z-10 w-full max-w-lg mx-4 rounded-2xl bg-neutral-900 text-white shadow-2xl border border-white/10">
            <button
              ref={closeBtnRef}
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 1 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="p-6 sm:p-8">
              <h2 id="disclaimer-title" className="text-xl font-semibold">Heads up</h2>
              <p className="mt-2 text-sm text-neutral-200 leading-relaxed">{disclaimer}</p>
              {selected?.name && (
                <p className="mt-4 text-xs text-neutral-400">
                  You were trying to open: <span className="font-medium">{selected.name}</span>
                </p>
              )}
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={agreeAndContinue}
                  className="inline-flex items-center justify-center cursor-pointer rounded-xl px-4 py-2 text-sm font-medium bg-white text-grade hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  I agree
                </button>
                <button
                  onClick={closeModal}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterGallery;
