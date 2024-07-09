
import {motion} from 'framer-motion';
import { LayoutProps } from "..";

export interface MainSectionBodyProps extends LayoutProps {};

export interface BodyHeaderProps extends LayoutProps {};
export interface BodyTitleProps extends LayoutProps {};


export function Body({ children }: MainSectionBodyProps) {
    return (
        <section className='flex flex-col min-h-[90%] lg:min-h-[95%] lg:pl-[20%]'>
            {children}
        </section>
    )
}

Body.Header = function Header({children}: BodyHeaderProps) {
    return (
        <header className='pt-2 pb-4'>
            {children}
        </header>
    )
}

Body.Title = function Title({children}: BodyTitleProps) {
    return (
        <motion.h3 
            className='pt-2 pb-4 text-2xl font-bold'
            initial={{
                opacity: 0,
                x: -20
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.4,
            }}
        >{children}</motion.h3>
    )
};
