import { motion, useScroll, useTransform } from "framer-motion";
import { PlayCircle, ArrowDown, Activity } from "lucide-react";
import ctrlImage from "@/assets/ctrl.jpg";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/hooks/useScrollReveal";
import { useRef } from "react";

const HeroSection = () => {
  const scrollToModels = () => {
    document.getElementById("models")?.scrollIntoView({ behavior: "smooth" });
  };

  const marqueeItems = [
    "/// System V2.0 Online",
    "/// AI Architecture",
    "/// Workflow Automation",
    "/// Machine Learning",
    "/// Business Intelligence",
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="w-full px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-0 items-center relative z-10 h-full flex-1">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
          className="lg:col-span-7 space-y-10 md:space-y-14 pt-10 lg:pt-0"
        >
          <motion.div variants={staggerItemVariants} className="flex items-center gap-4">
            <div className="w-px h-12 bg-foreground/20" />
            <div className="flex flex-col">
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Est. 2026 // Tel Aviv
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mt-1">
                  System V.2.0 Online
                </span>
            </div>
          </motion.div>

          <motion.h1
            variants={staggerItemVariants}
            className="text-[3.5rem] md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-black leading-[0.85] tracking-tighter"
          >
            AUTOMATE
            <br />
            <span className="text-stroke text-foreground/10">THE MUNDANE</span>
            <br />
            <span className="relative inline-block">
                CREATE
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-2 left-0 h-4 bg-primary/20 -z-10"
                />
            </span>
            <br />
            <span className="text-primary">THE FUTURE.</span>
          </motion.h1>

          <motion.p
            variants={staggerItemVariants}
            className="text-lg md:text-2xl text-muted-foreground max-w-xl font-light leading-relaxed border-l-4 border-primary/20 pl-6"
          >
            אנחנו לא רק בונים בוטים. סטודיו{" "}
            <span dir="ltr" className="font-bold text-foreground">
              &lt;/A.D_VANTAGE&gt;
            </span>{" "}
            מייצר ארכיטקטורה דיגיטלית חכמה שמאפשרת לעסקים לגדול ללא גבולות.
          </motion.p>

          <motion.div
            variants={staggerItemVariants}
            className="flex flex-col sm:flex-row gap-6 pt-6"
          >
            <button onClick={scrollToModels} className="btn-lab w-full sm:w-auto">
              <span>הכר את המודלים</span>
            </button>
            <button className="btn-outline w-full sm:w-auto">
              <PlayCircle className="w-5 h-5" />
              <span>צפה בדמו</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Visual Content with Parallax */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="lg:col-span-5 relative h-[50vh] lg:h-[85vh] w-full"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-secondary overflow-hidden border-l border-foreground/10">
            <div className="w-full h-full relative">
              <motion.img
                src={ctrlImage}
                alt="AI Interface"
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000"
                style={{ scale }}
              />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgydjJIMUMxeiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Floating Data Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-12 left-12 bg-background/90 backdrop-blur-xl p-8 border border-border shadow-2xl flex gap-8 items-center min-w-[280px]"
            >
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                <Activity className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  System Status
                </div>
                <div className="text-4xl font-black text-foreground">98.4%</div>
                <div className="text-xs text-primary font-mono mt-1">OPTIMIZED</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity }}
        transition={{ delay: 2, duration: 1 }}
        className="scroll-indicator absolute bottom-12 left-12 lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 vertical-lr">
          Scroll Down
        </span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </motion.div>

      {/* Marquee Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="w-full border-t border-border bg-background py-6 mt-auto"
      >
        <div className="marquee-container">
          <div className="marquee-content text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground/40 gap-16">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-primary/40 rounded-full" />
                  {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;