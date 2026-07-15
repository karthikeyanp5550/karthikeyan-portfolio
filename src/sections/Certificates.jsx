import { motion } from "framer-motion";
import { CERTIFICATES } from "../constants/data";
import certificateBg from "../assets/certificate-bg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: (i % 3) * 0.08,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(8,5,25,0.70), rgba(8,5,25,0.70)),
          url(${certificateBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
          className="eyebrow text-violet-soft mb-4"
        >
          04 — Achievements &amp; Milestones
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
          className="font-display text-4xl md:text-6xl font-semibold text-bone mb-14"
        >
          Certificates &amp; Badges
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2
              }}
              whileHover={{ y: -8 }}
              className="group rounded-xl bg-surface border border-line overflow-hidden card-glow hover:border-violet/40 transition-all duration-300"
            >
              {/* Certificate Image */}
             <div className="relative h-48 overflow-hidden">
               <a
                 href={cert.image}
                 target="_blank"
                 rel="noopener noreferrer"
                >
                 <img
                   src={cert.image}
                   alt={cert.title}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </a>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <h3 className="font-display text-lg text-bone mb-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-mute mb-3">
                  {cert.issuer}
                </p>

                <p className="eyebrow text-violet-soft">
                  {cert.note}
                </p>

                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block w-full text-center py-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 text-white hover:opacity-90 transition"
                >
                  View Certificate
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}