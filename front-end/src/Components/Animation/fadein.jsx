import { motion } from "motion/react";

const Fadein = ({ children }) => {
  return (
    <motion.div
      initial={{  opacity: 0 }}
      animate={{  opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Fadein;