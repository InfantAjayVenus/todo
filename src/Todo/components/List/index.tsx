import { motion } from 'framer-motion';
import { ListItem } from './ListItem';
import { Link } from 'react-router-dom';

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
            {(new Array(45).fill(0).map((_, index) => (
                <Link to={`/task-${index}`}>
                    <ListItem key={index} label={`test ${index}`} />
                </Link>
            )))}
        </motion.ul>
    )
}