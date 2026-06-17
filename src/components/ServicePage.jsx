import React from "react";

const ServicePage = ({
  heroTitle,
  heroDescription,
  heroImage,

  aboutTitle,
  aboutDescription,

  processTitle,
  processItems,

  ctaTitle,
  ctaDescription,
  ctaButton,
}) => {
  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Our Services
            </span>

            <h1 className="mt-4 text-5xl font-bold text-slate-900 leading-tight">
              {heroTitle}
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              {heroDescription}
            </p>

            <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl">
              Get Started
            </button>
          </div>

          <div>
            <img
              src={heroImage}
              alt={heroTitle}
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            {aboutTitle}
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl">
            {aboutDescription}
          </p>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-slate-900 mb-14">
            {processTitle}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {processItems?.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-slate-200"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold text-white">
            {ctaTitle}
          </h2>

          <p className="text-blue-100 mt-6">
            {ctaDescription}
          </p>

          <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold">
            {ctaButton}
          </button>

        </div>
      </section>

    </div>
  );
};

export default ServicePage;