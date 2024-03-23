import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Dentist Website",
    img: "../../../public/medecine.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, explicabo odit? Laborum veniam labore repellat sunt, accusamus quae laboriosam doloribus aliquam itaque voluptatem! Excepturi dolor veniam cupiditate voluptatem blanditiis et",
  },
  {
    id: 2,
    title: "Nextjs Blog",
    img: "../../../public/blog.svg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, explicabo odit? Laborum veniam labore repellat sunt, accusamus quae laboriosam doloribus aliquam itaque voluptatem! Excepturi dolor veniam cupiditate voluptatem blanditiis et",
  },
  {
    id: 3,
    title: "React Restaurant",
    img: "../../../public/restaurant.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, explicabo odit? Laborum veniam labore repellat sunt, accusamus quae laboriosam doloribus aliquam itaque voluptatem! Excepturi dolor veniam cupiditate voluptatem blanditiis et",
  },
  {
    id: 4,
    title: "React Ecomerce",
    img: "../../../public/ecomerce.svg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, explicabo odit? Laborum veniam labore repellat sunt, accusamus quae laboriosam doloribus aliquam itaque voluptatem! Excepturi dolor veniam cupiditate voluptatem blanditiis et",
  },
  {
    id: 5,
    title: "React Dentist Website",
    img: "../../../public/medecine.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, explicabo odit? Laborum veniam labore repellat sunt, accusamus quae laboriosam doloribus aliquam itaque voluptatem! Excepturi dolor veniam cupiditate voluptatem blanditiis et",
  },
  {
    id: 6,
    title: "Nextjs Blog",
    img: "../../../public/blog.svg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, explicabo odit? Laborum veniam labore repellat sunt, accusamus quae laboriosam doloribus aliquam itaque voluptatem! Excepturi dolor veniam cupiditate voluptatem blanditiis et",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
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
