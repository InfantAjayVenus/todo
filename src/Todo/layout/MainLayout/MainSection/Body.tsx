import {motion} from 'framer-motion';
import { LayoutProps } from "..";

export interface MainSectionBodyProps extends LayoutProps {
    title: string,
};


export function Body({ title, children }: MainSectionBodyProps) {
    return (
        <section className='flex flex-col min-h-[90%] lg:min-h-[95%] lg:pl-[20%]'>
            <header className='pt-2 pb-4'>
                <motion.h3 
                    className='text-2xl font-bold'
                    initial={{
                        opacity: 0,
                        x: -20
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                >{title}</motion.h3>
            </header>
            {children}
        </section>
    )
}