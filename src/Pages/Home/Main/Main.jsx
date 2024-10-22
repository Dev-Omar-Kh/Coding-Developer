import React, { useEffect, useState } from 'react';

import mainCSS from './main.module.css';
import { Link } from 'react-router-dom';
import { IoArrowForwardOutline } from 'react-icons/io5';
import FakeMainData from './FakeMainData';
import { AnimatePresence , motion } from 'framer-motion';

export default function Main() {

    const data = FakeMainData;


    // ====== main-slide ====== //

    const [currentData, setCurrentData] = useState(data[0]);

    useEffect(() => {

        const handleNextBook = () => {

            const nextId = (data.indexOf(currentData) + 1) % data.length;
            setCurrentData(data[nextId]);

        }

        const interval = setInterval(handleNextBook, 8000);

        return () => clearInterval(interval);

    } , [data , currentData]);

    // ====== framer-motion ====== //

    const parentVariants = {

        hidden : {opacity: 0},
        visible: {opacity : 1 , transition: {duration: 0.3}},
        exit : {opacity: 0 , transition: {duration : 0.3}}

    };

    const toBottomVariants = {

        hidden : {opacity: 0 , y: -40},
        visible : {opacity: 1 , y: 0 , transition: {duration : 0.6}} ,
        exit : {opacity: 0 , y: -40 , transition: {duration : 0.6}}

    }

    const toTopVariants = {

        hidden : {opacity: 0 , y: 40},
        visible : {opacity: 1 , y: 0 , transition: {duration : 0.6}} ,
        exit : {opacity: 0 , y: 40 , transition: {duration : 0.6}}

    }

    return <React.Fragment>

        <div className={mainCSS.container}>

            <span className={mainCSS.overlay}></span>

            <img className={mainCSS.cover_img} src={require('../../../Images/cover-photo.jpeg')} alt="cover_image" />

            <AnimatePresence mode="wait">

                <motion.div 
                    key={currentData._id}
                    className={mainCSS.content_layer}
                    variants={parentVariants} initial='hidden' animate='visible' exit={'exit'}  
                >

                    <motion.div variants={toBottomVariants} className={mainCSS.content_left}>

                        <h3>{currentData.title}</h3>

                        <p>{currentData.description}</p>

                        <Link to={currentData.link} >More details <IoArrowForwardOutline /></Link>

                    </motion.div>

                    <motion.div variants={toTopVariants} className={mainCSS.content_right}>

                        <img src={currentData.image} alt="" />

                    </motion.div>

                </motion.div>

            </AnimatePresence>

        </div>

    </React.Fragment>

}
