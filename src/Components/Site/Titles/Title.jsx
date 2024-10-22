import React from 'react'
import { motion } from 'framer-motion';

export default function Title({children}) {

    // ====== framer-motion ====== //

    const titleVariants = {

        hidden: {opacity: 0 , y: 40},
        visible: {opacity: 1 , y: 0},

    }

    return <React.Fragment>

        <motion.div 
                className='main_title'
                variants={titleVariants} initial='hidden' whileInView={'visible'} viewport={{once: true , amount: 0.3}}
            >

                <div className='title_box'>

                    {children}

                </div>

            </motion.div>

    </React.Fragment>

}
