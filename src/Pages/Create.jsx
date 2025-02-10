import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Created from "../Components/Created";

export const Create = () => {
  const isShow = true;
  const [isBuy, setIsBuy] = useState(false);
  const navigate = useNavigate();

  const handleBut = () => {
    if (!isBuy) {
      setIsBuy(true);
    } else {
      navigate("/pixels");
    }
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={isBuy}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Created
            heading="Welcome"
            subHeading={isBuy ? "Purchase Your First Pixels!" : "Your Account is Ready!"}
            paragraph={
              isBuy
                ? "Claim your space on the Wall of Internet. Choose the blocks that represent you!"
                : "Congratulations! Your account setup is complete. You’re all set to explore and enjoy our services. Start your journey now!"
            }
            isShow={isShow}
            handleBut={handleBut}
            buttonText={isBuy ? "Buy" : "Get Started"}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
