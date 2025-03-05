"use client";

import { Children } from "react";
import { motion } from "framer-motion";
import { useStore } from "./store";

const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: "auto",
    transition: { when: "beforeChildren", staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0 },
};

function List({ children, open }) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate={open ? "show" : "hidden"}
    >
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  );
}

export default function ProductInfo({
  title,
  subtitle,
  description,
  price,
  accentText = null,
  className = "",
}) {
  const state = useStore();

  return (
    <div className={`product-info ${className}`}>
      <h1>{title}</h1>
      <List open={state.open}>
        {subtitle && <h3>{subtitle}</h3>}
        {accentText && (
          <h3>
            <span className="accent">{accentText}</span>
          </h3>
        )}
        <h4>{description}</h4>
        {price && <p className="price">{price}</p>}
        <p>{description}</p>
      </List>
    </div>
  );
}
