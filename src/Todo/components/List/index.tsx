import { motion } from 'framer-motion';
import { ListItem } from './ListItem';

export function List() {
    return (
        <motion.ul
            className='py-6'
            variants={{
                start: {},
                end: {
                    transition: {
                        type: 'spring',
                        duration: 4,
                        staggerChildren: 0.09,
                    }
                }
            }
            }

            initial="start"
            animate="end"
        >
            {(new Array(5).fill(0).map((_, index) => (
                <ListItem key={index} label='test' />
            )))}
        </motion.ul>
    )
}