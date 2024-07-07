import {motion} from 'framer-motion';
import { LayoutProps } from "./MainLayout";

interface ContainerProps extends LayoutProps { };

export function Container({ children }: ContainerProps) {
    return (
        <motion.div 
            className='flex-grow relative border border-current rounded-3xl p-4 lg:w-[80%] '
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                delay: 0.1,
                duration: 0.6
            }}
        >{children}</motion.div>
    )
}