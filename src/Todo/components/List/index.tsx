import { motion } from 'framer-motion';
import { ListItem } from './ListItem';

export function List() {
    return (
        <motion.ul
            className='py-6 overflow-auto max-h-[100%]'
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
            {(new Array(15).fill(0).map((_, index) => (
                <ListItem key={index} label={`test ${index + 1}`} />
            )))}
        </motion.ul>
    )
}