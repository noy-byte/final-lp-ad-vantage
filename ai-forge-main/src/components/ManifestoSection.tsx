import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Zap, Aperture, BarChart3, LucideIcon } from "lucide-react";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/hooks/useScrollReveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
  index: string;
}

const features: Feature[] = [
  {
    icon: Cpu,
    title: "Custom Development",
    description: "פיתוח מערכות מותאמות אישית. לא עוד פתרונות מדף שלא מתאימים, אלא חליפה שנתפרה למידות העסק.",
    accentColor: "#111827",
    index: "01"
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description: "חיבור בין מערכות. ה-CRM מדבר עם המייל, שמדבר עם ה-WhatsApp. אפס מגע יד אדם.",
    accentColor: "#06b6d4",
    index: "02"
  },
  {
    icon: Aperture,
    title: "Visual AI",
    description: "יצירת נכסים ויזואליים וטקסטואליים בקנה מידה עצום, תוך שמירה על שפה מותגית אחידה.",
    accentColor: "#3b82f6",
    index: "03"
  },
  {
    icon: BarChart3,
    title: "Data Insights",
    description: "דשבורדים חכמים שמציפים תובנות בזמן אמת. להפסיק לנחש ולהתחיל לדעת.",
    accentColor: "#eab308",
    index: "04"
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={staggerItemVariants}
      className="feature-card group bg-card hover:bg-muted/30 p-10 lg:p-14 border-r border-b border-border min-h-[320px] flex flex-col relative"
      style={{ '--accent-color': feature.accentColor } as React.CSSProperties}
    >
      <span className="text-6xl font-black text-border/40 absolute top-6 left-6 select-none group-hover:text-primary/10 transition-colors">
        {feature.index}
      </span>
      
      <div className="mt-auto relative z-10">
        <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-none bg-muted group-hover:bg-primary transition-colors duration-300">
             <Icon
                className="w-6 h-6 text-foreground group-hover:text-white transition-colors"
             />
        </div>
        <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-300">{feature.title}</h3>
        <p className="text-muted-foreground text-base leading-relaxed max-w-sm font-light">
            {feature.description}
        </p>
      </div>
      
      <div className="absolute top-0 right-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

const ManifestoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" as any });

  return (
    <section id="manifesto" className="py-32 w-full bg-background relative border-t border-border">
      <div className="w-full px-6 md:px-12" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-20">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="lg:col-span-4 sticky top-32 h-fit"
          >
            <motion.div variants={staggerItemVariants} className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-primary" />
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                The Manifesto
                </span>
            </motion.div>
            
            <motion.h2
              variants={staggerItemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[0.95]"
            >
              הופכים כאוס
              <br />
              <span className="text-muted-foreground">למערכת משומנת.</span>
            </motion.h2>
            <motion.p
              variants={staggerItemVariants}
              className="text-foreground/80 mb-12 text-xl font-light leading-relaxed max-w-md"
            >
              רוב העסקים טובעים במשימות ידניות. אנחנו בונים את הכלים שמוציאים
              אתכם מהבוץ ונותנים לכם אוויר לנשימה.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="lg:col-span-8 grid sm:grid-cols-2 gap-0 border-t border-l border-border"
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;