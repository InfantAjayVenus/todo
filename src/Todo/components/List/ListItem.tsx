import { motion } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';

interface ListItemProps {
    label: string,
}
export function ListItem({label}: ListItemProps) {
    return (
        <motion.li
            className='flex items-center justify-between space-x-2 border-b p-2 mb-2 capitalize'
            variants={{
                start: {
                    y: 50,
                    opacity: 0,
                },
                end: {
                    y: 0,
                    opacity: 1,
                }
            }}
        >
            <p className='text-xl text-ellipsis text-primary-foreground' > {label} </p>
            < Checkbox className='h-5 w-5 border-2 font-semibold text-primary-foreground' />
        </motion.li>
    )
}