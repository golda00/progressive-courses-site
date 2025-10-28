import React from "react";

export function Subscription() {
  const features = [
    {
      title: "Internship",
      desc: "Gain hands-on, mentor-led internship opportunities with partner companies. Work on real projects, get weekly feedback, and build a portfolio-ready project."
    },
    {
      title: "Aptitude Training",
      desc: "Structured aptitude sessions covering quantitative, logical reasoning, verbal ability and problem solving — designed for placement tests and competitive exams."
    },
    {
      title: "Placement Support for Final Years",
      desc: "Personalized placement assistance: resume reviews, mock interviews, company shortlists, and dedicated placement coordinators to help final-year students secure interviews."
    },
    {
      title: "Special Invitation for Tech Talks",
      desc: "Exclusive invites to expert tech talks, panel discussions, and webinars led by industry professionals and alumni — live Q&A and networking opportunities."
    },
    {
      title: "Global Certification Pathways (10–20% Offer)",
      desc: "Access partner-led global certification programs with an exclusive 10–20% discount for members. Guided learning paths and capstone projects to validate your skills."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Premium Membership Benefits
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Unlock exclusive advantages for students and institutions through our membership plans.
        </p>

        <div className="space-y-6">
          {features.map((f, i) => (
            <article
              key={i}
              className="w-full bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold">
                    {String(i + 1)}
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            View Membership Plans
          </button>
        </div>
      </div>
    </section>
  );
}
