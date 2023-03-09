import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrepper } from '../hoc';

const ServicesCard = ({ index, title, icon}) => {
  return (
    < Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-20 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
            className="w-16 H-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center"
            >{title}</h3>

        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Je suis un développeur web passionné avec une solide expérience en HTML,
        CSS, JavaScript, ReactJS et ThreeJS. Je suis également un designer talentueux
        qui peut créer des interfaces utilisateur élégantes et fonctionnelles pour les
        sites web et les applications. Grâce à mes compétences en marketing des réseaux,
        je suis en mesure d'aider mes clients à atteindre leurs objectifs commerciaux en
        maximisant leur visibilité en ligne.

        Je suis particulièrement doué pour créer des sites web et des applications
        de qualité qui offrent une expérience utilisateur exceptionnelle.
        Mon attention aux détails et mon engagement à fournir des résultats 
        de qualité supérieure font de moi un choix évident pour les projets de
        développement web. Si vous cherchez à créer un site web ou une application
        qui se démarque de la concurrence, je suis le développeur web et designer qu'il vous faut.

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=> (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrepper (About, "about")