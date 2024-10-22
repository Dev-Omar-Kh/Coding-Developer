import React from 'react';
import{ motion } from 'framer-motion';
import { IoAddCircleOutline } from 'react-icons/io5';

import servicesCSS from './services.module.css';
import ServicesData from './ServicesData';
import Title from '../../../Components/Site/Titles/Title';

export default function Services() {

    const data = ServicesData;

    // ====== framer-motion ====== //

    const ParentVariants = {

        hidden: {opacity: 0},
        visible: {opacity: 1 , transition: {duration: 0.3 , staggerChildren : 0.3}},

    }

    const childVariants = {

        hidden: {opacity: 0 , y: 40},
        visible: {opacity: 1 , y: 0},

    }

    return <React.Fragment>

        <div className={ `all_container`}>

            <Title>
                <IoAddCircleOutline />
                <span>Services</span>
            </Title>

            <motion.div 
                className={servicesCSS.container}
                variants={ParentVariants} initial='hidden' whileInView={'visible'} viewport={{once: true , amount: 0.2}}
            >

                {data.map(service => <motion.div 
                    className={servicesCSS.card}
                    key={service._id} variants={childVariants} 
                    whileHover={{boxShadow: '0px 0px 20px var(--shadow-color)' , transform: 'translateY(-5px)'}} 
                >

                    <div className={servicesCSS.card_icon}>

                        <div className={servicesCSS.icon_box}>

                            <img src={service.icon} alt="" />

                        </div>

                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                </motion.div>)}

            </motion.div>

        </div>

    </React.Fragment>

}
