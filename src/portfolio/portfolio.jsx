import { useRef } from "react";
import "./portfolio.scss";
import Microsoft from "../assets/img/Microsoft.jpg"
import SNU from "../assets/img/SNU.png"
import Nothing from "../assets/img/Nothing.jpg"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Intern at Microsoft",
    imgUrl: Microsoft,
    desc: "Upcoming  2024 summer Internship of Two-month internship at Microsoft Hyderabad as an Associate Consultant.(May 2024 - July 2024)",
  },
  {
    id: 2,
    title: "Resarch Fellow at SNU",
    imgUrl: SNU,
    desc: "Working on building a model for dehazing images using distillation and Cycle-GAN, which includes deep learning, image processing, and computer vision. (Spet 2023- Present)",
  },
  {
    id: 3,
    title: "Intern at Nothing",
    imgUrl: Nothing,
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
