import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { staggerContainerVariants, staggerItemVariants } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" as any });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-50px" as any });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("תודה! פרטייך התקבלו.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-muted pt-32 pb-12 px-6 relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainerVariants}
        className="max-w-[900px] mx-auto text-center relative z-10"
      >
        <motion.div
          variants={staggerItemVariants}
          className="inline-block border border-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8"
        >
          Start Now
        </motion.div>
        <motion.h2
          variants={staggerItemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tight leading-[0.8]"
        >
          LET'S
          <br />
          <span className="text-stroke">TALK.</span>
        </motion.h2>
        <motion.p
          variants={staggerItemVariants}
          className="text-xl text-muted-foreground mb-16 font-light max-w-xl mx-auto"
        >
          הצעד הראשון לשינוי מתחיל בשיחה. ננתח את העסק שלכם ונראה איך אפשר
          לייעל אותו.
        </motion.p>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={formInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-8 text-right bg-card p-10 md:p-14 shadow-2xl border border-border relative"
        >
          {/* Color Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={formInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-blue-500 to-indigo-600 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-2"
          >
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Name
            </label>
            <input
              type="text"
              placeholder="שם מלא"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="input-minimal"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="space-y-2"
          >
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              placeholder="אימייל עסקי"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="input-minimal"
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-2"
          >
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              rows={3}
              placeholder="ספר לנו על האתגר..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="input-minimal resize-none"
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.65, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full btn-lab py-4 text-sm mt-8"
          >
            <span>שלח פנייה</span>
            <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-bold uppercase tracking-widest gap-6"
        >
          <div dir="ltr">© 2026 &lt;/A.D_VANTAGE&gt; STUDIO</div>
          <div className="flex gap-8">
            {["Instagram", "LinkedIn", "Twitter"].map((social, i) => (
              <motion.a
                key={social}
                href="#"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="hover:text-primary transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Large decorative background text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 0.05, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-black text-muted-foreground select-none pointer-events-none whitespace-nowrap -z-0"
        dir="ltr"
      >
        &lt;/A.D_VANTAGE&gt;
      </motion.div>
    </footer>
  );
};

export default ContactSection;
