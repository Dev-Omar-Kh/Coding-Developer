import React from 'react';
import Title from '../../../Components/Site/Titles/Title';
import { IoArrowForwardOutline, IoSchoolOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

import coursesCSS from './courses.module.css';
import { Link } from 'react-router-dom';
import CoursesData from './CoursesData';

export default function Courses() {

    const data = CoursesData;

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

        <div className='all_container'>

            <Title>
                <IoSchoolOutline />
                <span>Courses</span>
            </Title>

            <motion.div 
                className={coursesCSS.container}
                variants={ParentVariants} initial='hidden' whileInView={'visible'} viewport={{once: true , amount: 0.1}}
            >

                {data.map(course => <motion.div key={course._id} variants={childVariants} className={coursesCSS.card}>

                    <div className={coursesCSS.img_cont}>
                        <img src={course.image} alt={course.title} />
                    </div>

                    <div className={coursesCSS.course_det}>

                        <h3>{course.title}</h3>

                        <div className={coursesCSS.instructor}>Eng. {course.instructor}</div>

                        <p>{course.description}</p>

                        <div className={coursesCSS.more}>

                            <Link to={course.link}>Details <IoArrowForwardOutline /> </Link>

                        </div>

                    </div>

                </motion.div>)}

            </motion.div>

        </div>

    </React.Fragment>

}
