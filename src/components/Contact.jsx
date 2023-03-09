import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailJs from '@emailJs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrepper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailJs.send(
      'service_9j42avl',
      'template_xcb801i',
       {
        from_name: form.name,
        to_name: 'Malmeu',
        from_email: form.email,
        to_email: 'lunatech.dz@gmail.com',
        message: form.message,
       },

       '0LDWCqSVvwjxrCNfw'
      )
      .then(() => {
        setLoading(false);
        alert('Merci, je vous repondrais dans les plus brefs delais');

        setForm({
          name: "",
          email: "",
          message: "",  
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Une erreur est survenue, merci de réessayer plus tard');
      })
      

  }

  return (
    <div className="xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Entrer en contact</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Votre nom</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />

          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Votre Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Quel est votre email ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />

          </label>
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">Votre Message</span>
            <textarea
              rows="7" 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre Message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />

          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Envoyer'}

          </button>

        </form>

      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrepper (Contact, "contact")