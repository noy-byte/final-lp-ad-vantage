import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ScanSearch, Layers, Code2, Rocket } from "lucide-react";
import { staggerContainerVariants, staggerItemVariants } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    icon: ScanSearch,
    title: "אפיון וניתוח",
    description: "אנחנו ממפים את העסק, מזהים צווארי בקבוק ומבינים איפה ה-AI יתן את ה-ROI הגבוה ביותר.",
    isActive: true,
  },
  {
    number: "02",
    icon: Layers,
    title: "ארכיטקטורה",
    description: "תכנון הפתרון הטכנולוגי, בחירת המודלים (Vega, Hera וכו') והתאמתם לצרכים הספציפיים.",
  },
  {
    number: "03",
    icon: Code2,
    title: "פיתוח והטמעה",
    description: "בניית האוטומציות, חיבור ה-API והרצת טסטים בסביבה בטוחה לפני עלייה לאוויר.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "שיגור וליווי",
    description: "העסק שלכם עובר לאוטומט. אנחנו נשארים בתמונה לדיוקים, שדרוגים ותמיכה טכנית.",
    isPulsing: true,
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" as any });
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" as any });

  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-foreground text-background overflow-hidden relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTEgMWgzOHYzOEgxVjF6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainerVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/10 pb-8"
        >
          <div>
            <motion.span
              variants={staggerItemVariants}
              className="text-primary text-xs font-bold tracking-widest uppercase mb-6 block"
            >
              Methodology
            </motion.span>
            <motion.h2
              variants={staggerItemVariants}
              className="text-6xl md:text-8xl font-black mb-4 tracking-tighter"
            >
              תהליך העבודה
            </motion.h2>
            <motion.p variants={staggerItemVariants} className="text-white/60 text-xl font-light">
              פשוט. חד. מדויק.
            </motion.p>
          </div>
          <motion.div
            variants={staggerItemVariants}
            className="font-mono-style text-white/30 text-sm mt-8 md:mt-0 tracking-widest"
          >
            / execution_protocol_v1.0
          </motion.div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="absolute top-12 left-0 w-full h-px bg-gradient-to-l from-transparent via-primary to-transparent hidden md:block opacity-50 origin-right"
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              className="step-card group"
            >
              <span className="step-number-bg group-hover:text-primary/20 transition-colors duration-500">{step.number}</span>

              <div className="relative mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                    className={`w-4 h-4 border-2 border-background absolute -top-14 right-1/2 translate-x-1/2 z-20 hidden md:block rounded-full ${
                      step.isActive || step.isPulsing
                        ? "bg-primary"
                        : "bg-zinc-800"
                    } ${step.isPulsing ? "animate-pulse-glow shadow-[0_0_15px_rgba(6,182,212,0.8)]" : ""}`}
                  />
                  
                  <div className="step-icon-wrapper group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                    <step.icon className="w-8 h-8" />
                  </div>
              </div>

              <motion.h3
                className="text-2xl font-bold mb-4 relative z-10 group-hover:text-primary transition-colors"
              >
                {step.title}
              </motion.h3>
              <motion.p
                className="text-white/60 text-base leading-relaxed font-light relative z-10 group-hover:text-white/90 transition-colors"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;