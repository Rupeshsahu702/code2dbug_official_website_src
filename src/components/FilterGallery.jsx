import React, { useEffect, useState, useRef } from "react";

const FilterGallery = () => {
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

  const projects = [
    { id: 1, name: "HOCCO", category: "FOOD & BEVERAGE", image: "./src/assets/hocco.png", url: "https://www.hocco.in/" }, // trimmed
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
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const closeBtnRef = useRef(null);

  const disclaimer =
    "We’re new and hungry — the examples below are style demos, not client work (yet!).";

  function openModal(project) {
    setSelected(project);
    setIsOpen(true);
  }

  // NEW: navigate helper with trim so stray spaces don't break links
  function navigateTo(url) {
    const safe = (url || "").trim();
    if (!safe) return;
    window.location.href = safe;
  }

  // NEW: only show disclaimer for non-WIP; WIP goes straight to link
  function handleProjectClick(project) {
    if (project.category === "WORK IN PROGRESS") {
      navigateTo(project.url);
    } else {
      openModal(project);
    }
  }

  function closeModal() {
    setIsOpen(false);
    setSelected(null);
  }

  function agreeAndContinue() {
    if (selected && selected.url) {
      navigateTo(selected.url);
      return;
    }
    closeModal();
  }

  // Escape to close, lock scroll, focus management
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 0);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow || "";
    };
  }, [isOpen]);

  return (
    <div className="w-full inset-0 bg-grade  z-10 relative px-[5vw] sm:px-[10vw] py-[30vw] mt-[5vw]  sm:py-[5vw]">
      {/* Filter Tabs */}
      <div className="hidden  sm:block">
        <div className="flex flex-wrap  gap-6 justify-center  pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm text-white font-semibold tracking-wide ${
                activeCategory === cat
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid sm:grid-cols-2  bg-grade lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer group"
            onClick={() => handleProjectClick(project)}  
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleProjectClick(project);  {/* changed */}
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg w-full h-56 object-cover group-hover:opacity-90 transition"
            />
            <h3 className="text-lg text-white  font-semibold mt-3">
              {project.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Disclaimer Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-grade/70"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <div className="relative z-10 w-full max-w-lg mx-4 rounded-2xl bg-neutral-900 text-white shadow-2xl border border-white/10">
            {/* Close button */}
            <button
              ref={closeBtnRef}
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 1 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h2 id="disclaimer-title" className="text-xl font-semibold">
                Heads up
              </h2>
              <p className="mt-2 text-sm text-neutral-200 leading-relaxed">
                {disclaimer}
              </p>

              {selected?.name ? (
                <p className="mt-4 text-xs text-neutral-400">
                  You were trying to open:{" "}
                  <span className="font-medium">{selected.name}</span>
                </p>
              ) : null}

              {/* Actions */}
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
    </div>
  );
};

export default FilterGallery;
