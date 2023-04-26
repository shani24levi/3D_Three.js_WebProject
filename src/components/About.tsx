import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, Services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 45, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 450, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

const ServiceCard: React.FC<{
  title: string;
  icon: string;
  index: number;
  onClick?: (item: string) => void;
}> = ({ title, icon, index, onClick }) => {
  return (
    <Tilt options={defaultOptions}>
      <motion.div
        variants={fadeIn('left', 'spring', 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-r from-green-400 to-blue-500 p-[1px] rounded-3xl shadow-card"
      >
        <div className="bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] min-w-[280px] max-w-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center font-bold text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = (): React.ReactElement => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>interdiction</p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('left', '', 0.1, 1)}
        className="mb-2 text-secondary text-[17px] max-w-3xl leading-10"
      >
        I am a young software developer with extensive learning in TypeScript
        and JavaScript, and development in frameworks such as React, Node.js and
        Three.js. I am a fast learner and collaborate closely with project
        partners to to create efficient, scalable and user-friendly solutions
        that solve real world problems. Let's work together to create joint
        projects to expand technological knowledge and turn an idea into
        reality!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-3 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
