import React, { ComponentType } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component: React.ComponentType, idName: string) => {
  return function Hoc(): JSX.Element {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
    // function (props: Omit<T, "idName">): JSX.Element {
    //     const newProps = { ...props, idName } as T;
    //     return <Component {...newProps} />;
  };
};

export default SectionWrapper;
