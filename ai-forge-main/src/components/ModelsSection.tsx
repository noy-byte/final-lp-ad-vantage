import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import vegaImage from "@/assets/vega.jpg";
import heraImage from "@/assets/hera.jpg";
import posetrImage from "@/assets/posetr.jpg";
import ctrlImage from "@/assets/ctrl.jpg";
import { staggerContainerVariants, staggerItemVariants } from "@/hooks/useScrollReveal";

const models = [
  {
    number: "01",
    name: "VEGA",
    subtitle: "Time Management Unit",
    description: "המנהלת האדמיניסטרטיבית האולטימטיבית. מנהלת יומן, מתעדפת משימות, ומוודאת שאתם עובדים על מה שחשוב באמת.",
    image: vegaImage,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary",
    stats: [
      { value: "100%", label: "Accuracy" },
      { value: "24/7", label: "Availability" },
    ],
    tags: null,
    isOnline: true,
  },
  {
    number: "02",
    name: "H.E.R.A",
    subtitle: "Creative Writer",
    description: "קופירייטרית שלא מתעייפת. כותבת פוסטים, מיילים שיווקיים ומאמרים בקול המותג שלכם, בדיוק מושלם ובמהירות שיא.",
    image: heraImage,
    color: "text-hera",
    bgColor: "bg-hera",
    borderColor: "border-hera",
    stats: null,
    tags: ["Social", "Email", "Content"],
  },
  {
    number: "03",
    name: "POSETR",
    subtitle: "Visual Studio",
    description: "צלם הבית שלכם. מייצר תמונות מוצר מדהימות, ויז'ואלים לקמפיינים והדמיות תלת-ממד, ללא צורך בימי צילום יקרים.",
    image: posetrImage,
    color: "text-posetr",
    bgColor: "bg-posetr",
    borderColor: "border-posetr",
    stats: null,
    tags: null,
    hasLink: true,
  },
  {
    number: "04",
    name: "CTRL",
    subtitle: "Data Command Center",
    description: "מערכת שליטה ובקרה (CRM/Dashboards). מרכזת את כל הלידים והנתונים במקום אחד שקוף, כדי שתקבלו החלטות מבוססות דאטה ולא תחושות בטן.",
    image: ctrlImage,
    color: "text-ctrl",
    bgColor: "bg-ctrl",
    borderColor: "border-ctrl",
    stats: null,
    tags: ["Analytics", "CRM", "Dashboard"],
  },
  {
    number: "05",
    name: "CR(ea)M",
    subtitle: "The Archivist",
    description: "הזיכרון הארגוני שלכם. מערכת שזוכרת כל אינטראקציה עם לקוח, מנתחת דפוסים ומוודאת שאף לקוח לא נשכח מאחור.",
    image: ctrlImage,
    color: "text-cream",
    bgColor: "bg-cream",
    borderColor: "border-cream",
    stats: null,
    tags: ["Retention", "History"],
    isSpecial: true,
  },
];

const ModelCard = ({ model, index }: { model: typeof models[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" as any });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`stack-card flex flex-col lg:flex-row w-full border-y border-border group ${model.isSpecial ? 'bg-background' : 'bg-card'}`}
      style={{ zIndex: index + 10 }}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden bg-foreground border-l border-border">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:from-transparent lg:to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="absolute top-8 left-8 text-white/10 text-[8rem] lg:text-[12rem] font-black select-none leading-none"
        >
          {model.number}
        </motion.div>
        
        {model.isOnline && (
          <motion.div
            className="absolute bottom-8 left-8 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <div className={`w-2 h-2 rounded-full ${model.bgColor} animate-pulse-glow`} />
            <span className={`${model.color} text-xs font-bold tracking-widest font-mono`}>SYSTEM ONLINE</span>
          </motion.div>
        )}
      </div>

      {/* Content Side */}
      <div className={`w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center relative`}>
        <div className="absolute top-0 right-0 p-8 opacity-20">
             <div className="w-32 h-32 border-t-2 border-r-2 border-foreground" />
        </div>

        <motion.h3
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter"
        >
          {model.name}
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className={`${model.color} font-bold tracking-[0.2em] text-sm mb-10 uppercase flex items-center gap-4`}
        >
          {model.subtitle}
          <div className={`h-px flex-1 ${model.bgColor} opacity-30`} />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-muted-foreground text-xl leading-relaxed mb-12 font-light max-w-lg"
        >
          {model.description}
        </motion.p>

        {/* Stats */}
        {model.stats && (
          <div className="grid grid-cols-2 gap-8 mb-8">
            {model.stats.map((stat, i) => (
              <div key={stat.label} className="border-r border-border last:border-0">
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {model.tags && (
          <div className="flex flex-wrap gap-3">
            {model.tags.map((tag, i) => (
              <span
                key={tag}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border ${model.borderColor} ${model.color} bg-opacity-5`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        {model.hasLink && (
          <a
            href="#"
            className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest ${model.color} hover:gap-6 transition-all duration-300`}
          >
            Explore Gallery <ArrowLeft className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ModelsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" as any });

  return (
    <section
      id="models"
      className="py-32 relative bg-secondary/30"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainerVariants}
        className="w-full px-6 md:px-12 text-center mb-32"
      >
        <motion.div
          variants={staggerItemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/10 bg-background text-foreground/70 text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full" />
          The Squad
        </motion.div>
        <motion.h2
          variants={staggerItemVariants}
          className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
        >
          הנבחרת שלנו
        </motion.h2>
        <motion.p
          variants={staggerItemVariants}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
        >
          במקום להעסיק עובדים, שכרו סוכנים. כל מודל מתמחה בתחום ספציפי ומבצע
          אותו בשלמות.
        </motion.p>
      </motion.div>

      <div className="w-full px-6 md:px-12 flex flex-col gap-0 pb-[10vh]">
        {models.map((model, index) => (
          <ModelCard key={model.name} model={model} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ModelsSection;