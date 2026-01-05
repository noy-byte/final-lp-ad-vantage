import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import vegaImage from "@/assets/vega.jpg";
import { staggerContainerVariants, staggerItemVariants } from "@/hooks/useScrollReveal";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" as any });

  return (
    <section className="py-32 px-6 bg-card border-b border-border overflow-hidden">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 2 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ rotate: 0 }}
            className="w-full md:w-5/12 relative"
          >
            <div className="relative p-2 bg-card shadow-2xl border border-border transition-transform duration-500 ease-out">
              <motion.img
                initial={{ scale: 1.2, filter: "grayscale(100%)" }}
                animate={isInView ? { scale: 1, filter: "grayscale(100%)" } : {}}
                transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                src={vegaImage}
                alt="Founder"
                className="w-full h-[500px] object-cover"
              />
              <motion.div
                initial={{ opacity: 0, x: 40, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 -right-6 bg-foreground text-background px-8 py-5 shadow-lg"
              >
                <p className="font-bold text-lg">THE OPERATOR</p>
                <p className="text-[0.65rem] text-muted-foreground uppercase tracking-widest mt-1">
                  Founder & Lead Dev
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="w-full md:w-7/12 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-9xl font-black text-muted absolute -z-10 -translate-y-20 translate-x-10 pointer-events-none select-none"
            >
              STORY
            </motion.div>
            <motion.h2
              variants={staggerItemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 leading-[1.05]"
            >
              "הבנתי שאני לא יכולה להיות גם המנכ"לית וגם המבצעת."
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.3 },
                },
              }}
              className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
            >
              <motion.p variants={staggerItemVariants}>
                הקמתי את{" "}
                <strong className="font-bold text-foreground" dir="ltr">
                  &lt;/A.D_VANTAGE&gt;
                </strong>{" "}
                מתוך כאב אישי. כבעלת עסק, טבעתי במשימות טכניות שגזלו את זמני מהדבר
                האמיתי - פיתוח העסק והחזון.
              </motion.p>
              <motion.p variants={staggerItemVariants}>
                הבנתי שחייבת להיות דרך אחרת. חקרתי, פיתחתי ובניתי צבא של סוכנים
                דיגיטליים שעובדים בשבילי 24/7. היום, אני מפתחת עבורכם את אותן
                מערכות ששחררו אותי לחופשי.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 flex gap-16 border-t border-border pt-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.5, type: "spring" }}
              >
                <span className="block text-4xl lg:text-5xl font-black">15+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1 block">
                  Projects
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1, duration: 0.5, type: "spring" }}
              >
                <span className="block text-4xl lg:text-5xl font-black">99%</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1 block">
                  Accuracy
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
